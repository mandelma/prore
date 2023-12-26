import {MDBBtnClose} from "mdb-vue-ui-kit";

const InfoMessage = ({message}) => {




    return (
        <div className="info">
            {message}
            <MDBBtnClose
                onClick={closeInfo}

            />
        </div>

    )
}

const closeInfo = () => {

    console.log("Info closed state ")


}

export default InfoMessage;