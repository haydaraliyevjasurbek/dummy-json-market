import React, { useState } from 'react'
import { FaPhone } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
function Comment() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Bu yerda kerakli ma'lumotlar serverga jo'natish yoki ulashish mumkin
        setSubmitted(true);
    };
    return (

        <div className="container comment">
            <div className="comment__texts">
                <h2 className="comment__title">Questions. Offers. Complaints</h2>
                <p className="comment__description">Write to us. We will be happy to receive your message.</p>
                <div>
                    <span className="footer__icon"><FaPhone /></span>
                    <h4>Telephone:</h4>
                    <p>(09:00 to 21:00)+998 71 203-33-33</p>
                    <span className="footer__icon"><IoMdTime /></span>
                    <h4>Working hours:</h4>
                    <p>Mon-Sun: 09:00 - 21:00</p>
                    <span className="footer__icon"><IoLocationOutline /></span>
                    <h4>Office address:</h4>
                    <p>Tashkent sh. House 11A, Karatash street, Shaykhontohur district</p>
                </div>
            </div>
            <div className="footer__container">
                {!submitted ? (
                    <form className="footer__form" onSubmit={handleSubmit}>
                        <h2 className="footer__title">Biz bilan aloqa qiling</h2>
                        <div className="footer__input-group">
                            <label htmlFor="name" className="footer__label">Ismingiz</label>
                            <input
                                type="text"
                                id="name"
                                className="footer__input"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="footer__input-group">
                            <label htmlFor="email" className="footer__label">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="footer__input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="footer__input-group">
                            <label htmlFor="message" className="footer__label">Xabaringiz</label>
                            <textarea
                                id="message"
                                className="footer__textarea"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="footer__submit-btn">Yuborish</button>
                    </form>
                ) : (
                    <div className="footer__thank-you">
                        <h2>Rahmat!</h2>
                        <p>Sizning izohingiz qabul qilindi.</p>
                    </div>
                )}
            </div>
        </div>

    )
}

export default Comment