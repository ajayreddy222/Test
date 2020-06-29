import React, {useState} from 'react';
import axios from 'axios';

const { REACT_APP_MAIL_SERVER } = process.env;

const Form = () => {
    const [formData, setFormData] = useState({
        interest: 'Press and Media',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: ''
    });
    const [alert, setAlert] = useState({ display: false });

    const handleChange = (name) => (event) => {
        event.persist();
        setFormData((s) => ({...s, [name]: event.target.value}))
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const from = `${formData.firstName} ${formData.firstName} ${formData.email}`;
        let html = `<h3>${formData.message || ''}</h3>`;

        if (formData.phoneNumber) {
            html += `<br><p>Phone number: ${formData.phoneNumber}</p>`
        }

        html += `<br><p>Interest: ${formData.interest}</p>`;

        try {
            const res = await axios.post(`${REACT_APP_MAIL_SERVER}/api/send-email`,
                {
                    to: 'join@akeep.org',
                    from,
                    subject: 'Contact us',
                    html
                },
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                }
            );

            if (res.status === 200) {
                setAlert({display: true, success: true});
            } else {
                setAlert({display: true, success: false});
            }
        } catch (e) {
            setAlert({display: true, success: false});
        } finally {
            setTimeout(() => {
                setAlert({display: false})
            }, 5000);
        }
    };
    return (
        <>
            <form
                id="contact-us-form"
                name="contactUsForm"
                onSubmit={handleFormSubmit}
            >
                <label>Interest<span className="required" aria-hidden="true">*</span> </label>
                <br/>
                <select
                    name="interest"
                    onChange={handleChange('interest')}
                    value={formData.interest}
                >
                    <option value="Partnerships">Partnerships</option>
                    <option value="Volunteer Opportunities">Volunteer Opportunities</option>
                    <option value="Press and Media">Press and Media</option>
                    <option value="Other">Other</option>
                </select>
                <div className="contact-form-wrap">
                    <div id="contact-form">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="single-input-item">
                                    <label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="First Name *"
                                            value={formData.firstName}
                                            onChange={handleChange('firstName')}
                                            required
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="single-input-item">
                                    <label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Last Name *"
                                            value={formData.lastName}
                                            onChange={handleChange('lastName')}
                                            required
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="single-input-item">
                                    <label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email address *"
                                            value={formData.email}
                                            onChange={handleChange('email')}
                                            required
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="single-input-item">
                                    <label>
                                        <input
                                            type="text"
                                            name="phoneNumber"
                                            placeholder="Phone No"
                                            value={formData.phoneNumber}
                                            onChange={handleChange('phoneNumber')}
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="single-input-item">
                                    <label>
                                <textarea
                                    name="message"
                                    placeholder="Write Your Message *"
                                    cols="30"
                                    rows="7"
                                    value={formData.message}
                                    onChange={handleChange('message')}
                                    required
                                />
                                    </label>
                                </div>
                                <div className="single-input-item">
                                    <label>
                                        <button type="submit" className="btn-outline">SUBMIT</button>
                                    </label>
                                </div>

                                <div className="form-message"/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            {alert.display && alert.success && (
                <div className="alert alert-success" role="alert">
                    Email has been sent
                </div>
            )}
            {alert.display && !alert.success && (
                <div className="alert alert-danger" role="alert">
                    Something get wrong...
                </div>
            )}
        </>
    );
};

export default Form;