import React from "react";

import { BuildinLXDAO } from "../components/BuildinLXDAO";

export default {
  title: "Example/BuildinLXDAO",
  component: BuildinLXDAO,
  argTypes: {},
};

const Template = (args) => <BuildinLXDAO {...args} />;

export const component = Template.bind({});
component.args = {};
