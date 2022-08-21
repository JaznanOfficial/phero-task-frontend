import React from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useFetch = () => {
    const [data, setData] = useState([]);


    const postMethod = (url, setShow, bills, e) => {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bills),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success("Successfully added bill");
                    setShow(false);
                    e.target.reset()
                } else {
                    setShow(false);
                    toast.error("Oops! Something went wrong. Please try again");
                }
            })
            .catch((err) => {
                setShow(false);
                toast.error("Oops! Something went wrong. Please try again");
            });
    };

    // post method-------------------------------------------->

    const getMethod = (url) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    // get method------------------------------>

    const deleteMethod = (url, id, bills) => {
        console.log(bills);
        fetch(url, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((deleteData) => {
                if (deleteData.acknowledged) {
                    const remainingData = bills.filter((bill) => bill._id !== id);
                    console.log(remainingData);
                    setData(remainingData);
                    toast.success("Successfully deleted bill");
                    console.log(data);
                } else {
                    toast.error("Oops! Something went wrong. Please try again");
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error(err.message);
            });
    };
    // delete method------------------------------>

    return {
        data,
        setData,
        deleteMethod,
        getMethod,
        postMethod,


    };
};

export default useFetch;
