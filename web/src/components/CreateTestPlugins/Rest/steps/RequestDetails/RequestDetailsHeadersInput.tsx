import {PlusOutlined} from '@ant-design/icons';
import {Button, Form, Input} from 'antd';
import {DEFAULT_HEADERS, IKeyValue} from 'constants/Test.constants';
import React from 'react';
import * as S from './RequestDetails.styled';

interface IProps {
  initialValue?: IKeyValue[];
  name?: string;
  unit?: string;
  label?: string;
}
const RequestDetailsHeadersInput: React.FC<IProps> = ({
  unit = 'Header',
  name = 'headers',
  initialValue = DEFAULT_HEADERS,
  label = 'Header',
}) => (
  <Form.Item className="input-headers" label={`${label} list`} shouldUpdate>
    <Form.List name={name} initialValue={initialValue}>
      {(fields, {add, remove}) => (
        <>
          {fields.map((field, index) => (
            <S.HeaderContainer key={field.name}>
              <Form.Item name={[field.name, 'key']} noStyle>
                <Input placeholder={`${unit} ${index + 1}`} />
              </Form.Item>

              <Form.Item name={[field.name, 'value']} noStyle>
                <Input placeholder={`Value ${index + 1}`} />
              </Form.Item>

              <Form.Item noStyle>
                <Button
                  icon={<S.DeleteIcon />}
                  onClick={() => remove(field.name)}
                  style={{marginLeft: 12}}
                  type="link"
                />
              </Form.Item>
            </S.HeaderContainer>
          ))}

          <Button
            data-cy="add-header"
            icon={<PlusOutlined />}
            onClick={() => add()}
            style={{fontWeight: 600, height: 'auto', padding: 0}}
            type="link"
          >
            {`Add ${label}`}
          </Button>
        </>
      )}
    </Form.List>
  </Form.Item>
);

export default RequestDetailsHeadersInput;
