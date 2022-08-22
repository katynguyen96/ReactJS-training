import React from "react";
import Button from "./index.js";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;
export const AddNew = Template.bind({});
AddNew.args = {
  text: "Add New",
  inputColor: "red",
};
