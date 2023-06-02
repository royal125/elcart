import React, { useState } from "react";

const AddUser = ({ setTokenValue }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.store.ellcart.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer <eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaS5zdG9yZS5lbGxjYXJ0LmNvbS91c2Vycy9sb2dpbiIsImlhdCI6MTY4NTYzNDY1MCwibmJmIjoxNjg1NjM0NjUwLCJqdGkiOiJBZ2doWFpiT1VxeGF4QTBvIiwic3ViIjoiMjA0IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.28tizEstlORenFGcDin-3RSFgtHzJpnoA2UYI7A2sJ0>`,
        },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: phone,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add user");
      }

      const data = await response.json();

      if (data && data.authorisation && data.authorisation.access_token) {
        const token = data.authorisation.access_token;
        setTokenValue(token);
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setErrorMessage("");
      }
    } catch (error) {

      setErrorMessage(error.message);
      console.error("Failed to add user:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {errorMessage && <p>{errorMessage}</p>}
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Phone:
        <input type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Add User"}
      </button>
    </form>
  );
};

export default AddUser;
