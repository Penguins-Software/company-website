import { useState, useEffect, useRef } from 'react'
// import emailjs from 'emailjs-com'



// const initialState = {
//   name: '',
//   email: '',
//   message: '',
// }
export const Contact = (props) => {
  // const [{ name, email, message }, setState] = useState(initialState)

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setState((prevState) => ({ ...prevState, [name]: value }))
  // }
  // const clearState = () => setState({ ...initialState })


  const validateText = (text) => {
    // NOTE: Passes RFC 5322 but not tested on google's standard.
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
    return re.test(text) || text.length === 0;
  };
  
  const messages = [
    'hi',
    'hello',
    'hola',
    'you-can-email-me-at-literally-anything! Really',
    'well, not anything. But most things',
    'like-this',
    'or-this',
    'but not this :(  ',
    'you.can.also.email.me.with.specific.topics.like',
    'just-saying-hi',
    'please-work-for-us',
    'help',
    'admin',
    'or-I-really-like-your-website',
    'I\'ll-stop-distracting-you-now',
    'thanks',
  ];

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();
  
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    useEffect(() => {
      if (delay) {
        const id = setInterval(() => {
          savedCallback.current();
        }, delay);
        return () => clearInterval(id);
      }
      return () => {}; // pass linter
    }, [delay]);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(name, email, message)
  //   emailjs
  //     .sendForm(
  //       'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text)
  //         clearState()
  //       },
  //       (error) => {
  //         console.log(error.text)
  //       }
  //     )
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const sgMail = require('@sendgrid/mail')
  //   console.log(process.env.REACT_APP_SENDGRID_API_KEY)
  //   sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY)
  //   const msg = {
  //     to: 'inquiry@penguinssoftware.com', // Change to your recipient
  //     from: 'no-reply@penguinssoftware.com', // Change to your verified sender
  //     subject: 'Sending with SendGrid is Fun',
  //     text: 'and easy to do anywhere, even with Node.js',
  //     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  //   }
  //   sgMail
  //     .send(msg)
  //     .then(() => {
  //       console.log('Email sent')
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     })
  //   }


    const hold = 50; // ticks to wait after message is complete before rendering next message
    const delay = 50; // tick length in mS
  
    const [idx, updateIter] = useState(0); // points to current message
    const [message, updateMessage] = useState(messages[idx]);
    const [char, updateChar] = useState(messages[idx].length); // points to current char
    const [isActive, setIsActive] = useState(true); // disable when all messages are printed
  
    useInterval(() => {
      let newIdx = idx;
      let newChar = char;
      if (char - hold >= messages[idx].length) {
        newIdx += 1;
        newChar = 0;
      }
      if (newIdx === messages.length) {
        setIsActive(false);
      } else {
        updateMessage(messages[newIdx].slice(0, newChar));
        updateIter(newIdx);
        updateChar(newChar + 1);
      }
    }, isActive ? delay : null);


  return (
    <div>
      <div id='contact'>
        <div className='container'>
          {/* <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
              </form>
            </div>
          </div> */}
          <div className='col-md-12'>
          <h3>Contact Info</h3>
            {/* <div className='contact-item col-md-4'>
              
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                {props.data ? props.data.address : 'loading'}
              </p>
            </div>
            <div className='contact-item col-md-4'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div> */}
            

            <div
              className="inline-container"
              style={validateText(message) ? {} : { color: 'red' }}
              onMouseEnter={() => setIsActive(false)}
              onMouseLeave={() => (idx < messages.length) && setIsActive(true)}
            >
              <a href={validateText(message) ? `mailto:${message}@penguinssoftware.com` : ''}>
                <span>{message}</span>
                <span>@penguinssoftware.com</span>
              </a>
          </div>



          </div>
          {/* <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2021 Pegnuins Software LLC
          </p>
        </div>
      </div>
    </div>
  )
}
