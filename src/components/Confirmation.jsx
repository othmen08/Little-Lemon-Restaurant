import './Confirmation.css'
export default function Confirmation( {formData,setShowConfirmation,submitForm}) {

 
    const handleConfirm = () => {
      console.log(formData);
      
      try {
      const Data = formData;

      const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
      let counter = JSON.parse(localStorage.getItem('Counter')) || 0;
      const newId = counter + 1;
      const newBooking = {
        id: newId,
        ...Data,
      };
      const updatedBookings = [...existingBookings, newBooking];
      localStorage.setItem('bookings', JSON.stringify(updatedBookings));
      localStorage.setItem('Counter', JSON.stringify(newId));

        submitForm(formData)
      } catch (error) {
        alert("Submission failed. Please try again.");
      }
      };
    
      const handleEdit = () => {
        setShowConfirmation(false);
      };
    
    return(
      <section className="confirmation-form" aria-live="polite">
      <h1>Confirm the booking</h1>
      <table className="confirmation-details">
        <tbody>
          <tr>
            <th>Date:</th>
            <td>{formData.date}</td>
          </tr>
          <tr>
            <th>Time:</th>
            <td>{formData.time}</td>
          </tr>
          <tr>
            <th>Guests:</th>
            <td>{formData.guests}</td>
          </tr>
          <tr>
            <th>Seating:</th>
            <td>{formData.seating}</td>
          </tr>
          <tr>
            <th>Occasion:</th>
            <td>{formData.occasion}</td>
          </tr>
          <tr>
            <th>Contact Preference:</th>
            <td>{formData.contactPreference}</td>
          </tr>
          <tr>
            <th>Special Request:</th>
            <td>{formData.specialRequest}</td>
          </tr>
        </tbody>
      </table>

      <div className="confirmation-buttons">
        <button className="btn_confirm" type="submit" onClick={handleConfirm} aria-label="Confirm reservation">
          Confirm
        </button>
        <button className="btn_edit" onClick={handleEdit} aria-label="Edit reservation">
          Back
        </button>
      </div>
    </section>
    )
}