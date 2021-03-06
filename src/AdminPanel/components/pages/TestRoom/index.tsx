import React, { useState } from 'react';
import BlueButton from 'AdminPanel/components/atoms/BlueButton';
import Base from 'AdminPanel/components/templates/Base';
import { callNotification } from 'AdminPanel/utils/callNotification';



export default () => {
  const [count, setCount] = useState(1);

  const onClick = () => {
    callNotification({
      header: `hello there! x${count}`,
      content: 'General Kenobi!'
    })

    setCount(count + 1);
  }

  return (
    <Base>
      <BlueButton onClick={onClick}>Click!</BlueButton>
    </Base>
  );
}
