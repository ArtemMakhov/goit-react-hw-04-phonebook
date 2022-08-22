import PropTypes from "prop-types";
import { Label, Input, Text } from "./Filter.styled";

export const Filter = ({ onChange, value }) => {
    return (
        <Label>
            <Text>Find contacts by name</Text>
            <Input onChange={onChange} type="text" name="filter" value={value}/>
        </Label>
    )
};

Filter.protoTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};