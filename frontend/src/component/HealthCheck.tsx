"use client";
import { useEffect, useState } from "react";

export default function HealthCheck() {
    const [data, setData] = useState<string>("Loading...");
    const [isError, setIsError] = useState<boolean>(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/api/health");
                const result = await res.json();
                setData(typeof result === "object" ? JSON.stringify(result) : result);
                setIsError(false);
            } catch (error) {
                console.error("Fetch error:", error);
                setData("Error loading data");
                setIsError(true);
            }
        };

        fetchData();
    }, []);

    return <p
        className={`text-lg leading-8 ${isError
                ? "text-red-600 dark:text-red-400"
                : "text-green-600 dark:text-green-400"
            }`}
    >
        Backend Response: {data}
    </p>
}