import './App.css';
import { Button } from 'components/Button';
import { Card } from 'components/Card';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className='content'>
                    <div className='card'>
                        <Card isSrcImg={true} title={"Revenue"} amount={"5.00"} unit={"ETH"}>
                            <div className='textCenter'>
                                <Button btnText={"12.3"} width={"115"} height={"46"} onClick={() => alert('Hello btn1')}>%</Button>
                                {/* <Button btnText={"12.3"} >%</Button> */}
                            </div>
                        </Card>
                        <Card isSrcImg={true} title={"Spending"} amount={"2.00"} unit={"ETH"}>
                            <div className='textCenter'>
                                <Button btnText={"8.2"} width={"115"} height={"46"} onClick={() => alert('Hello btn2')}>%</Button>
                            </div>
                        </Card>
                    </div>
                    <div className='card'>
                        <Card isSrcImg={false} title={"ROI"} amount={"+14.02"} unit={"%"}>
                            <div className='textCenter'>
                                <Button btnText={"-5.1"} width={"115"} height={"46"} onClick={() => alert('Hello btn2')}>%</Button>
                            </div>
                        </Card>
                        <Card isSrcImg={true} title={"Estimated"} amount={"7.00"} unit={"ETH"}>
                            <div className='textCenter'>
                                <Button btnText={"3.2"} width={"115"} height={"46"}>%</Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
