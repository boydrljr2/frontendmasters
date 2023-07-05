import React, {useState} from "react";
import ReactDOM from "react-dom";
import { GlobalStyle, serifFont, sansSerifFont, typeScale, mgaTheme } from "./utils";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "./components/buttons";
import { Select, Option, Label } from "./components/selects";
import { P, H1, H2, H3, H4, h5 } from "./components/text";
import { SignUpModal, LoginModal } from "./components";


const App = () => {

    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    return (
        <main>
            <H1>Figma Storybook</H1>
            <H2> Hello from designstorybook</H2>
            {/* Write a paragraph with 200 characters filled with lorem ipsum */}
            <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam euismod, nisl eget aliquam ultricies, nunc nisl
                aliquet nunc, quis aliquam nisl nunc vitae nisl. Nulla
                facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
            </P>

            <div>
                <PrimaryButton>Click Me</PrimaryButton>
                <PrimaryButton disabled>Click Me Not</PrimaryButton>
            </div>
            <div>
                <SecondaryButton>Click Me</SecondaryButton>
                <SecondaryButton disabled>Click Me Not</SecondaryButton>
            </div>
            <div>
                <TertiaryButton>Click Me</TertiaryButton>
                <TertiaryButton disabled>Click Me Not</TertiaryButton>
            </div>
            <div>
                <Label htmlFor="select-ray-price-song">Ray Price Songs</Label>
                <Select name="Ray Price Songs" id="select-ray-price-song">
                    <Option value="--Select One--">--Select One--</Option>
                    <Option value="For the Good Times" style={{fontFamily: serifFont}}>For the Good Times</Option>
                    <Option value="Crazy Arms">Crazy Arms</Option>
                    <Option value="City Lights">City Lights</Option>
                    <Option value="Heartaches by the Number">Heartaches by the Number</Option>
                </Select>
            </div>
            <div>
                <PrimaryButton onClick={() => setShowSignUpModal(!showSignUpModal)}>Toggle SignUp Modal</PrimaryButton>
                <SecondaryButton onClick={()=>setShowLoginModal(!showLoginModal)}>Toggle Login Modal</SecondaryButton>
            </div>
            <SignUpModal showSignUpModal={showSignUpModal} setShowSignUpModal={setShowSignUpModal}/>
            <LoginModal showLoginModal={showLoginModal} setShowLoginModal={setShowLoginModal}/>
            <GlobalStyle />
        </main>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));

// added a comment to see where this file is saved in github
