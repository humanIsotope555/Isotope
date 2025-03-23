import $ from 'jquery';
import React, {Component, useState, useEffect, } from 'react';
import axios from 'axios';
import getCookie from './csrf-token';


const csrftoken = getCookie;

async function apiService() {
        let response = await fetch('http://127.0.0.1:8000/blog/requests/1', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${csrftoken}`,
            'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify({ username: "example" }),


        })
        const post =  await response.json
        return post
    }

export async function getTest(endpoint){
    return apiService(endpoint);
}

/*
const NoListResult = ({title}) => {
        return (
            <strong>{title}</strong>
        )
   }

const BuildPage = () => {
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getList().then(posts_ => {
            setPosts(posts_)
            setLoading(false)
        }).catch(error => {
            alert('Ошибка запроса')
        })
    }, [])

    if (loading) {
        return <>
            Загрузка...
        </>
    }


    if (posts.length == 0) {
        return <NoListResult title="Нет постов" />
    }
    }
    */