const Header = () => {
    return (
      <header className="App-header">
        <section>
          <h3 className="title">Trending Subjects</h3>
          <input className="input" type={"text"} placeholder="Search Subjects" />
          <p>Javascript</p>
          <p>Harry Potter</p>
          <p>Indian History</p>
          <p>Crypto currency</p>
          <p>Criminal Law</p>
        </section>
      </header>
    );
}

export default Header;