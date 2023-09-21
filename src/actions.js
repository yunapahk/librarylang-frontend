import url from "./url"

import { redirect } from "react-router-dom"

// Create Action for Creating Libraries
export const createAction = async({request}) => {
    // parse out the form data
    const formData = await request.formData();

    // construct the body for our api call
    const newLibrary = {
        name: formData.get("name"),
        language: formData.get("language")
    }

    // make a request to create a library
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newLibrary)
    })

    // redirect to the index page
    return redirect("/")
}

// Update Action for Updating Libraries
export const updateAction = async({request, params}) => {
    // get the id from params
    const id = params.id
    // parse out the form data
    const formData = await request.formData();
    // construct the updated library
    const updatedLibrary = {
        name: formData.get("name"),
        language: formData.get("language")
    }

    // make a request to update a library
    await fetch(url + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedLibrary)
    })

    // redirect to the show page
    return redirect(`/post/${id}`)
}

// Delete Action for Deleting Libraries
export const deleteAction = async({params}) => {
    // get the id from params
    const id = params.id

    // make a request to delete a library
    await fetch(url + id, {
        method: "delete"
    })

    // redirect to the index page
    return redirect("/")
}