import iconList from '../assets/assets/images/icon-list.svg'
import '../App.css'
import Form from './Form';
export default function FormContainer() {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
          justifyContent: "center",
        }}
        className="mt-5 w-100"
      >
        <h3
          style={{
            color: "hsl(234, 29%, 20%)",
            fontWeight: "bold",
            textAlign: "start",
            fontFamily: "CustomFontBold",
          }}
          className="m-3"
        >
          Stay updated!
        </h3>
        <p className="m-3">
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <ul style={{ listStyleType: "none",padding:'14px' }}>
          <li>
            <img src={iconList} alt="" width={18} height={18} className='mr-5'/> Product
            discovery and building what matters
          </li>
          <li>
            <img src={iconList} alt="" width={18} height={18} /> Measuring to
            ensure updates are a success
          </li>
          <li>
            <img src={iconList} alt="" width={18} height={18} /> And much more
          </li>
        </ul>

        <Form />
      </div>
    </>
  );
}
