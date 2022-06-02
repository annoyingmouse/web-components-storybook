import { DonutChart } from "./DonutChart";

const Template = () => `<wc-donut-chart id="test"
                   values='[
                     {
                       "name":"Part 1",
                       "value":5,
                       "color":"black"
                     },{
                       "name":"Part 2",
                       "value":5,
                       "color":"rgba(252, 194, 51, 0.8)"
                     },{
                       "name":"Part 3",
                       "value":5,
                       "color":"rgba(53, 57, 44, 0.5)"
                     }
                   ]'
                   part-1-value="5"
                   part-1-name="Part 1"
                   part-1-color="#E64C65"
                   part-2-value="5"
                   part-2-name="Part 2"
                   part-2-color="#11A8AB"
                   part-3-value="5"
                   part-3-name="Part 3"
                   part-3-color="#4FC4F6"
                   animation-duration="3"
                   hole-color="#394264"></wc-donut-chart>`;

export default {
  component: DonutChart,
  title: "Library/Components/DonutChart",
};

export const Default = Template.bind({});

export const Type00 = () => `<wc-donut-chart id="test"
                         part-1-value="5"
                         part-1-name="Part 1"
                         part-1-color="#E64C65"
                         part-2-value="5"
                         part-2-name="Part 2"
                         part-2-color="#11A8AB"
                         part-3-value="5"
                         part-3-name="Part 3"
                         part-3-color="#4FC4F6"
                         animation-duration="3"
                         hole-color="#394264"></wc-donut-chart>`;

export const Type01 = () => `<wc-donut-chart values='[{"name":"part 1","value":5,"color":"#FF0000"},{"name":"part 2","value":5,"color":"#00FF00"},{"name":"part 3","value":5,"color":"#0000FF"}]'
                         animation-duration="3"
                         hole-color="#FFFFFF"></wc-donut-chart>`;

export const Type02 = () => `<wc-donut-chart values='[{"name":"part 1","value":120,"color":"#FF0000"},{"name":"part 2","value":120,"color":"#00FF00"},{"name":"part 3","value":120,"color":"#0000FF"}]'
                         animation-duration="1"
                         hole-color="#FFFFFF"></wc-donut-chart>`

export const Type03 = () => `<wc-donut-chart values='[{"name":"part 1","value":120,"color":"#FF0000"},{"name":"part 2","value":120,"color":"#00FF00"},{"name":"part 3","value":120,"color":"#0000FF"},{"name":"part 4","value":120,"color":"#00FFFF"}]'
                         animation-duration="3"
                         hole-color="#FFFFFF"></wc-donut-chart>`

export const Type04 = () => `<wc-donut-chart values='[{"name":"part 1","value":120,"color":"#eeeeee"},{"name":"part 2","value":120,"color":"#cccccc"},{"name":"part 3","value":120,"color":"#999999"},{"name":"part 4","value":120,"color":"#666666"},{"name":"part 4","value":120,"color":"#333333"},{"name":"part 4","value":120,"color":"#000000"}]'
                         animation-duration="5"
                         hole-color="#cccccc"></wc-donut-chart>`

export const Type05 = () => `<wc-donut-chart id="grey"></wc-donut-chart>`
