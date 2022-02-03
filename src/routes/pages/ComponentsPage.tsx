import React from 'react';
import SuperSelect from "../../components/SuperSelect/SuperSelect";
import SuperInputText from "../../components/SuperInput/SuperInputText";
import SuperCheckbox from "../../components/SuperCheckbox/SuperCheckbox";
import SuperButton from "../../components/SuperButton/SuperButton";
import SuperRadio from "../../components/SuperRadio/SuperRadio";
import SuperEditableSpan from "../../components/EditableSpan/SuperEditableSpan";

export const ComponentsPage = () => {
    return (
        <div>
            <SuperSelect options={["Vlad", "Ignatz"]}/>
            <SuperInputText/>
            <SuperCheckbox style={{margin: '0 auto'}}/>
            <SuperButton style={{width: '40px', height: '25px'}}/>
            <SuperRadio options={['Vlad', 'Ignatz']}/>
            <SuperEditableSpan value={'Hello'}/>
        </div>
    )
}
