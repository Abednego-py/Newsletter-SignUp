import iconSucess from '../assets/assets/images/icon-success.svg'
import "../App.css";

function Confirmation() {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "hsl(0, 0%, 100%)",
        margin: "auto",
        top: "2%",
        height: "60%",
        borderRadius: "10px",
      }}
      className="col-lg-4 col-sm-8 p-4"
    >
      <img src={iconSucess} alt="" width={35} height={35} />
      <h1 className="mt-4" style={{ fontFamily: "CustomFontBold" }}>
        Thanks for subscribing!
      </h1>
      <p className='mt-3 mb-3' style={{lineHeight:'25px'}}>A confirmation email has been sent to <b>ash@lorencecompany.com</b>.
        Please open it and click the button inside to confirm your subscription.
      </p>

      <button>Dismiss message</button>
    </div>
  );
}

export default Confirmation