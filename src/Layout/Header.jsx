const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
const scrollTop = "scroll-top";
let lastScroll = 0;


body.classList.add(scrollTop);

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    body.classList.add(scrollTop);
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.remove(scrollTop);
    body.classList.add(scrollDown);
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains(scrollDown)
  ) {
    // up
    body.classList.remove(scrollDown);
    body.classList.remove(scrollTop);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});

function Header() {
  return(
    <header className="container">
      <div className="nav scroll-up scroll-down">
        <ul>
          <li><a href="#main-body">Home</a></li>
          <li><a href="">About</a></li>
          <li>
          <a href="#main-content">Work</a>.
          </li> 
          
        </ul>
      </div>
    </header>
  );
}

export default Header;