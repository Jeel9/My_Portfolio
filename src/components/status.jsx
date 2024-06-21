const StatusTag = styled("div")({
  backgroundColor: `rgba(243, 244, 246, 1)`,
  boxShadow: `0px 2px 4px rgba(16, 24, 40, 0.06), 0px 4px 8px rgba(16, 24, 40, 0.1)`,
  borderRadius: `8px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `12px 16px`,
  boxSizing: `border-box`,
  left: `70px`,
  top: `524px`,
  height: `44px`,
  width: `170px`,
});

const Frame15 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
  height: `20px`,
  width: `138px`,
});

const Status = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(96, 100, 108, 1)`,
  fontStyle: `normal`,
  fontFamily: `Khula`,
  fontWeight: `600`,
  fontSize: `14px`,
  letterSpacing: `0.28px`,
  textDecoration: `none`,
  lineHeight: `125%`,
  textTransform: `uppercase`,
  margin: `0px`,
});

const Frame14 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px 0px 0px 12px`,
  height: `20px`,
  width: `79px`,
});

const Ellipse1 = styled("img")({
  height: `6px`,
  width: `6px`,
  margin: `0px`,
});

const Available = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(24, 24, 27, 1)`,
  fontStyle: `normal`,
  fontFamily: `Khula`,
  fontWeight: `700`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  lineHeight: `125%`,
  textTransform: `none`,
  margin: `0px 0px 0px 4px`,
});

  import React from 'react'
  
  const status = () => {
    return (
      <div>
        <StatusTag>
            <Frame15>
              <Status>
                {`Status`}
              </Status>
              <Frame14>
                {/* <Ellipse1 src={Ellipse1Image} loading='lazy' alt={"Ellipse 1"}/> */}
                <Available>
                  {`Available`}
                </Available>
              </Frame14>
            </Frame15>
          </StatusTag>
      </div>
    )
  }
  
  export default status;
  