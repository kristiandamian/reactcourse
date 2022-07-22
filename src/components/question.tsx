import { Fragment } from "react";
import Answer from "./answer";

const Question = () => {
    /*const {history} = useRouter();

    useEffect(() => {
        //Disable back button in browser
        return () => {
            if (history.action === 'POP') {
                history.go(1);
            }
        };
    }, [history]);
*/
    return (
        <Fragment>
            <Answer id={1} text="" isCorrect={false} />

        </Fragment>
    );
}

export default Question