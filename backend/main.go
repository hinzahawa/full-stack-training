package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	_ "github.com/go-sql-driver/mysql"
	"github.com/joho/godotenv"
)

func main() {
	errEnv := godotenv.Load()
	if errEnv != nil {
		// ถ้าเป็นบน Docker / Production ที่ไม่มีไฟล์ .env มันจะข้ามบรรทัดนี้ไปอ่านค่าจาก System Env แทน
		fmt.Println("Notice: Could not load .env file, reading from System Environment")
	}
	dbUser := os.Getenv("DB_USER")
	dbPass := os.Getenv("DB_PASSWORD")
	dbHost := os.Getenv("DB_HOST")
	dbPort := os.Getenv("DB_PORT")
	dbName := os.Getenv("DB_NAME")

	fmt.Printf("Connecting to DB Host: %s, Port: %s, User: %s, DB: %s\n", dbHost, dbPort, dbUser, dbName)

	dsn := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s", dbUser, dbPass, dbHost, dbPort, dbName)

	var db *sql.DB
	var err error

	// Connect to Database with Retry Logic
	for i := 0; i < 10; i++ {
		db, err = sql.Open("mysql", dsn)

		if err == nil && db.Ping() == nil {
			fmt.Println("Successfully connected to MySQL!")
			break
		}
		fmt.Println("Waiting for database connection...")
		time.Sleep(2 * time.Second)
	}

	if err != nil {
		log.Fatalf("Could not connect to DB: %v", err)
	}
	defer db.Close()

	http.HandleFunc("/api/health", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "application/json")

		// ตรวจสอบสถานะการเชื่อมต่อ Database ณ เวลาที่ยิง Endpoint
		if err := db.PingContext(r.Context()); err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write(fmt.Appendf(nil, `{"status": "error", "message": "Database connection failed: %v"}`, err))
			return
		}

		// กรณีผ่านทั้งหมด (Backend + DB ทำงานปกติ)
		w.WriteHeader(http.StatusOK)
		w.Write([]byte(`{"status": "ok", "message": "Golang Backend and Database are Healthy!"}`))

	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	fmt.Printf("Server running on port %s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
