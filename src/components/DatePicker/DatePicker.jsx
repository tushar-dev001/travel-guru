// src/components/DatePicker.jsx
import  { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePickers = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      {/* <input type="date" /> */}
       <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    </div>
  );
};

export default DatePickers;
