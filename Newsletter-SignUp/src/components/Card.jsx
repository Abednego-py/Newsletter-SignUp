import Banner from "./Banner";
import Form from "./FormContainer";

function Card({setIsSubscribed}) {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "hsl(0, 0%, 100%)",
        borderRadius:'10px',
        maxHeight:'75%'
      }}
      className="container-fluid rounded col-lg-6 col-md-8 col-sm-12 mt-5"
    >
      <div className="row w-100 h-100">
        <div className="col-lg-6 col-sm-12">
            <Form />
        </div>
        <div className="col-lg-6 col-sm-12">
          <Banner />
        </div>
      </div>
    </div>
  );
}

export default Card;
