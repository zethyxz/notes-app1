import { useState } = from "react"


function Rating() {
    const stars = Array.from({length: 5}, (_, i) => + 1)
    const [rating, setRating] = useState (0)
    const [hover, setHover] = useState (0)  

    const clicked = (index) => console.log('clicked', index)
    const feedbackMessage = ['Terrible', 'Poor', 'Fair', 'Good', 'Exellent']

    return (
        <div className= "rating-container">
            <h2>Rate your Experince!</h2>
            <p>{rating}</p>
            <p>{rating}</p>

    )

}