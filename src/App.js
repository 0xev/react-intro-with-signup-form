function App() {
  return (
    <div className="container">
      <div className="text">
        <h1>Learn to code by watching others</h1>
        <p className="title">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>

      <div className="form-and-buttons">
        <button className="try-btn">
          <span>Try it free 7 days</span> then $20/mo. thereafter
        </button>
        <form className="card">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="text" placeholder="Email Address" required />
          <input type="text" placeholder="Password" required />
          <button className="claim-btn">CLAIM YOUR FREE TRIAL</button>
          <p>
            By clicking the button, you are agreeing to our
            <a href="www.google.com">Terms and Services</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
