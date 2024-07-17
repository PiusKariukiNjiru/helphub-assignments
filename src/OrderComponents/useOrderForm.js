import { useState, useEffect } from 'react';
import useWritingPrice from './useWritingPrice';

const useOrderForm = () => {
  const [email, setEmail] = useState('');
  const [orderType, setOrderType] = useState('Writing from scratch');
  const [level, setLevel] = useState('Undergraduate');
  const [deadline, setDeadline] = useState(336);
  const [pages, setPages] = useState(1);
  const [resources, setResources] = useState(0);
  const [formattingStyle, setFormattingStyle] = useState('APA 7');
  const [otherFormattingStyle, setOtherFormattingStyle] = useState('');
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState('');
  const [instructions, setInstructions] = useState('');
  const [files, setFiles] = useState([]);
  const [price, setPrice] = useState(0);

  const calculatedPrice = useWritingPrice(orderType, level, pages, deadline);

  useEffect(() => {
    setPrice(calculatedPrice);
  }, [orderType, level, deadline, pages, resources, formattingStyle, subject, topic, instructions, files, calculatedPrice]);

  return {
    email, setEmail,
    orderType, setOrderType,
    level, setLevel,
    deadline, setDeadline,
    pages, setPages,
    resources, setResources,
    formattingStyle, setFormattingStyle,
    otherFormattingStyle, setOtherFormattingStyle,
    subject, setSubject,
    topic, setTopic,
    instructions, setInstructions,
    files, setFiles,
    price, setPrice
  };
};

export default useOrderForm;
