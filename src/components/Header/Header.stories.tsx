import React from "react";
import Header, {HeaderProps} from './Header';

export default {
    children: '',
    title: 'Component/Header',
    component: Header,
};

const Template = (args: HeaderProps) => {
    return (
        <Header {...args} />
    )
};

const props = {
    defaultProps: () => ({
        ColorModeContext: null
    }),
};

export const HeaderStory: any = Template.bind({});
const defaultProps = props.defaultProps();
HeaderStory.storyName = 'Header';
HeaderStory.args = {
    ...defaultProps,
};
