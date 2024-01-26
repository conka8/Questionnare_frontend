import { CustomCheckbox, CheckboxInput, CheckboxLabel, Icon, Checkmark } from "./styles";

type TCheckbox = {
    handleSelect: (e: React.FormEvent<HTMLInputElement>) => void
    checked: boolean;
    label: string
}

const Checkbox = ({ checked, handleSelect, label }: TCheckbox) => {
    return (
        <CustomCheckbox>
            <CheckboxInput type="checkbox" checked={checked} onChange={handleSelect} />
            <Checkmark checked={checked}>{checked && <Icon viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
            </Icon>
            }</Checkmark>
            <CheckboxLabel fw={300} checked={checked}>{label}</CheckboxLabel>
        </CustomCheckbox>
    );
};

export default Checkbox;