import React from 'react'

export const showNotification = () =>{
  document.getElementById('notificationSignUp').classList.add("active")
}
export const closeNotification = () =>{
  document.getElementById('notificationSignUp').classList.remove("active")
}
export default function index({children}) {
  const onCloseModal = () =>{
    document.getElementById('notificationSignUp').classList.remove("active")
  }
  return (
    <div id ="notificationSignUp" className="modal-signin" onClick={onCloseModal}>
      <div className="modal-signin__content" onClick={ e => e.stopPropagation()}>
          {children}
      </div>
    </div>
  )
}
