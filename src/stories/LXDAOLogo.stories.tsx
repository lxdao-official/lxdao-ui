import React from "react";

import { LXDAOLogo } from "../components/LXDAOLogo";

export default {
  title: "Example/LXDAOLogo",
  component: LXDAOLogo,
  argTypes: { height: "72px", width: "224px" },
};

const Template = () => <LXDAOLogo />;

export const component = Template.bind({});
