import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import MyDocument from "./components/MyDocument";

function App() {

    return (
        <div className='container-fluid mt-5'>
            <div className='row'>
                <div className='col-sm-9'>
                    <PDFViewer width="100%" height="1000px">
                        <MyDocument />
                    </PDFViewer>
                </div>
                <div className='col-sm-3'>
                    <PDFDownloadLink document={<MyDocument />} fileName="mycv" className='btn btn-primary'>
                        {({ loading }) => (loading ? "Loading..." : " Download")}
                    </PDFDownloadLink>
                </div>

            </div>
        </div>
    );
}

export default App;
