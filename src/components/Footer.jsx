import React from 'react'
import Comment from '../pages/Comment'

function Footer() {
  return (
    <>
    <Comment/>
    <div className="footer container">
      <ul className="footer-data-dummy-json">
        <li className="footer-data__item">DUMMY JSON</li>
        <li className="footer-data__item">If you have any questions, we are ready to answer them!</li>
        <li className="footer-data__item"><a href="tel:+998931923736">+998931923736</a></li>
        <li className="footer-data__item"><a href="tel:+998903362706">+998903362706</a></li>
        <li className="footer-data__item">Working time:</li>
        <li className="footer-data__item">Every day: 09:00 - 21:00</li>
      </ul>
      <ul className="footer-payment">
        <li className="footer-payment__item">Payment methods</li>
        <li className="footer-payment__item"><img src="payme.png" alt="" /></li>
        <li className="footer-payment__item"><img src="solfy.png" alt="" /></li>
        <li className="footer-payment__item"><img src="union.png" alt="" /></li>
        <li className="footer-payment__item"><img src="uzcard.png" alt="" /></li>
        <li className="footer-payment__item"><img src="uzum_nasiya.png" alt="" /></li>
        <li className="footer-payment__item"><img src="visa.webp" alt="" /></li>
      </ul>
      <ul className="footer-customers">
        <li className="footer-customers__item">For customers</li>
        <li className="footer-customers__item">Leave a comment</li>
        <li className="footer-customers__item">Vacancies</li>
        <li className="footer-customers__item">Cooperation</li>
        <li className="footer-customers__item">Return procedure</li>
        <li className="footer-customers__item"></li>
        <li className="footer-customers__item"></li>
      </ul>
    </div>
    </>
  )
}

export default Footer