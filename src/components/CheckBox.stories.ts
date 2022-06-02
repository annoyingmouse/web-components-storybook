import { CheckBox } from "./CheckBox";

const Template = ({theme}) => `
    <div id="app" data-theme="${theme}">
      <form>
        <my-checkbox />
      </form>
    </div>
  `;

export default {
  component: CheckBox,
  title: "Library/Components/CheckBox",
  argTypes: {
    theme: {
      options: ['dark', 'light'],
      control: { type: 'radio' },
    },
  },
};

export const Default = Template.bind({});