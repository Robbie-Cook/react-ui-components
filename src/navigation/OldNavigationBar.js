import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";
import React, { Component } from "react";
import styled from "styled-components";
import { MyAnilink } from "../animation";
import { MobileView, ViewSizes } from "../layout";
import { MobileNav } from "../navigation";
import { Sizes, DefaultThemeObjectObject } from "../themes";
import { Spacer } from "../ui-components";
import { Heading, Link, MyLink } from "../utilities";

/**
 * Navgation bar UI component
 */
class NavigationBar extends Component {
  constructor(props) {
    super(props)
  }
  /* CSS */
  // const StyledAppBar = withStyles({
  //   root: {
  //     backgroundColor: DefaultThemeObject.backgroundColor,
  //     height: Sizes.navbar.height
  //   }
  // })(AppBar);

  // const StyledTabs = withStyles({
  //   root: {
  //     // Not ideal, should be done with breakpoints in theme
  //     // re: https://stackoverflow.com/questions/45847090/media-queries-in-material-ui-components
  //     [`@media (max-width:${ViewSizes.mobileSize}px)`]: {
  //       display: "none"
  //     }
  //   }
  // })(Tabs);

  // const StyledToolbar = styled(Toolbar)`
  //   z-index: 150;
  //   margin-left: 0;
  //   padding: 0;
  //   ${new MobileView(`
  //       margin-left: 20px;
  //     `)};
  // `;

  // let navigationLinks = [new MyLink("Home", "/"), new MyLink("News", "/news")];
  // let heading = "Open Politics";
  render() {
    return (
      <AppBar position="static" color="primary" colorPrimary>
        {/* <StyledToolbar>
        {heading && (
          <>
            <Heading type="h3" margin="0">
              {heading}
            </Heading>
            <Spacer width="56px" />
          </>
        )}
        <MobileNav pages={navigationLinks} />
        <StyledTabs>
          {(() => {
            let array = [];

            let LinkContainer = styled.div`
              margin-right: 30px;
            `;
            navigationLinks.map(item => {
              // If the current URL is the same as the item path, mark Tab as active
              array.push(
                <LinkContainer>
                  <MyAnilink path={item.path}>
                    <Link
                      style={`
                          line-height: ${Sizes.navbar.height};
                          position: relative;
                          bottom: -5px;
                          color: ${DefaultThemeObject.text.color}
                        `}
                    >
                      {item.name}
                    </Link>
                  </MyAnilink>
                </LinkContainer>
              );
            });
            return array;
          })()}
        </StyledTabs>
      </StyledToolbar> */}
      </AppBar>
    );
  }
}
