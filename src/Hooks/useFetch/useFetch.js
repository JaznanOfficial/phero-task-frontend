import React from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [url]);

    const deleteMethod = (url,id) => {
        // const id = url.split("/").pop();
        // console.log(id);
        fetch(url, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                
                if (data.acknowledged) { 
                    const remainingData = data.filter((bill) => bill._id !== id);
                    toast.success("Successfully deleted bill");
                    setData(remainingData);
                    console.log(data);
                }
                else {
                    toast.error("Oops! Something went wrong. Please try again");
                }
            }).catch((err) => {
                console.log(err);
                toast.error(err.message);
            }
            );
    }

    return {
        data,
        setData,
        deleteMethod,
    }
};

export default useFetch;
