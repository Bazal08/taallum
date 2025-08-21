"use client";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import TextInput from '@/components/templates/input/TextInput';
import TextLabel from '@/components/templates/text/TextLabel';
import { createBlog, clearMessages } from '@/redux/slice/blogSlice';

// Validation schema
const validationSchema = Yup.object({
  name: Yup.string().required('Blog title is required'),
  metaTitle: Yup.string().required('Meta title is required'),
  metaDescription: Yup.string().required('Meta description is required'),
  keywords: Yup.string(),
  category: Yup.string(),
  content: Yup.array().of(
    Yup.object({
      info: Yup.string(),
      heading: Yup.string(),
    })
  ),
  images: Yup.array().min(1, 'At least one image is required'),
});

const CreateBlogForm = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.blog);

  return (
    <Container>
      <Wrapper>
        <Title>Create a New Blog Post</Title>
        <Formik
          initialValues={{
            name: '',
            metaTitle: '',
            metaDescription: '',
            keywords: '',
            category: '',
            content: [
              { info: '', heading: '' },
              { info: '', heading: '' },
              { info: '', heading: '' },
            ],
            images: [null, null],
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('metaTitle', values.metaTitle);
            formData.append('metaDescription', values.metaDescription);
            if (values.keywords) formData.append('keywords', values.keywords);
            if (values.category) formData.append('category', values.category);

            values.content.forEach(({ info, heading }, index) => {
              if (info) formData.append(`info${index + 1}`, info);
              if (heading) formData.append(`heading${index + 1}`, heading);
            });

            values.images.forEach((file, index) => {
              if (file) formData.append(`image${index + 1}`, file);
            });

            await dispatch(createBlog(formData));
            setSubmitting(false);
            if (!error) resetForm();
          }}
        >
          {({ values, errors, touched, setFieldValue }) => (
            <StyledForm>
              <FormGroup>
                <TextLabel>Blog Title</TextLabel>
                <Field
                  as={TextInput}
                  name="name"
                  placeholder="Enter blog title"
                  required
                />
                {errors.name && touched.name && <ErrorText>{errors.name}</ErrorText>}
              </FormGroup>

              <FormGroup>
                <TextLabel>Meta Title</TextLabel>
                <Field
                  as={TextInput}
                  name="metaTitle"
                  placeholder="Enter meta title"
                  required
                />
                {errors.metaTitle && touched.metaTitle && <ErrorText>{errors.metaTitle}</ErrorText>}
              </FormGroup>

              <FormGroup>
                <TextLabel>Meta Description</TextLabel>
                <Field
                  as={StyledTextArea}
                  name="metaDescription"
                  placeholder="Enter meta description"
                  required
                />
                {errors.metaDescription && touched.metaDescription && (
                  <ErrorText>{errors.metaDescription}</ErrorText>
                )}
              </FormGroup>

              <FormGroup>
                <TextLabel>Keywords (comma-separated)</TextLabel>
                <Field
                  as={TextInput}
                  name="keywords"
                  placeholder="Enter keywords"
                />
              </FormGroup>

              <FormGroup>
                <TextLabel>Category</TextLabel>
                <Field
                  as={TextInput}
                  name="category"
                  placeholder="Enter category"
                />
              </FormGroup>

              <FieldArray name="content">
                {({ push, remove }) => (
                  <>
                    {values.content.map((_, index) => (
                      <ContentGroup key={index}>
                        <FormGroup>
                          <TextLabel>Heading {index + 1}</TextLabel>
                          <Field
                            as={TextInput}
                            name={`content[${index}].heading`}
                            placeholder={`Enter heading ${index + 1}`}
                          />
                        </FormGroup>
                        <FormGroup>
                          <TextLabel>Description {index + 1}</TextLabel>
                          <Field
                            as={StyledTextArea}
                            name={`content[${index}].info`}
                            placeholder={`Enter description ${index + 1}`}
                          />
                        </FormGroup>
                        {index >= 3 && (
                          <RemoveButton type="button" onClick={() => remove(index)}>
                            Remove Section
                          </RemoveButton>
                        )}
                      </ContentGroup>
                    ))}
                    <AddButton
                      type="button"
                      onClick={() => push({ info: '', heading: '' })}
                      disabled={values.content.length >= 15}
                    >
                      Add Section
                    </AddButton>
                  </>
                )}
              </FieldArray>

              <FieldArray name="images">
                {({ push, remove }) => (
                  <>
                    {values.images.map((_, index) => (
                      <FormGroup key={index}>
                        <TextLabel>Image {index + 1}</TextLabel>
                        <FileInput
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            if (e.target.files[0]) {
                              setFieldValue(`images[${index}]`, e.target.files[0]);
                            }
                          }}
                          required={index < 1}
                        />
                        {index >= 2 && (
                          <RemoveButton type="button" onClick={() => remove(index)}>
                            Remove Image
                          </RemoveButton>
                        )}
                      </FormGroup>
                    ))}
                    <AddButton
                      type="button"
                      onClick={() => push(null)}
                      disabled={values.images.length >= 15}
                    >
                      Add Image
                    </AddButton>
                    {errors.images && touched.images && <ErrorText>{errors.images}</ErrorText>}
                  </>
                )}
              </FieldArray>

              <SubmitButton type="submit" disabled={loading}>
                {loading ? 'Creating...' : 'Create Blog'}
              </SubmitButton>
              {success && <SuccessText>{success}</SuccessText>}
              {error && (
                <ErrorText>
                  {error.error}: {error.details}
                </ErrorText>
              )}
              {(success || error) && (
                <ClearButton type="button" onClick={() => dispatch(clearMessages())}>
                  Clear Messages
                </ClearButton>
              )}
            </StyledForm>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #050b20;
  text-align: center;
  margin-bottom: 2rem;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentGroup = styled.div`
  border: 1px solid #d6ddeb;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const StyledTextArea = styled.textarea`
  padding: 1rem;
  font-size: 14px;
  font-family: var(--font-openSans);
  border: 1px solid #d6ddeb;
  border-radius: 8px;
  background-color: transparent;
  color: black;
  resize: vertical;
  min-height: 100px;
  outline: none;

  &:hover {
    border-color: #3f3f3f;
  }

  &:focus {
    border: 1.48px solid gray;
  }

  &::placeholder {
    color: #e1e1e1;
    opacity: 0.85;
  }
`;

const FileInput = styled.input`
  font-family: var(--font-openSans);
  padding: 0.5rem;
`;

const SubmitButton = styled.button`
  background-color: #050b20;
  color: #ffffff;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-family: var(--font-openSans);
  transition: background-color 0.3s;

  &:hover {
    background-color: #3f3f3f;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const AddButton = styled.button`
  background-color: #050b20;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-top: 0.5rem;

  &:hover {
    background-color: #3f3f3f;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const RemoveButton = styled.button`
  background-color: #ff4d4f;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-top: 0.5rem;

  &:hover {
    background-color: #cc0000;
  }
`;

const ErrorText = styled.p`
  color: #ff4d4f;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const SuccessText = styled.p`
  color: #28a745;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const ClearButton = styled.button`
  background-color: #6c757d;
  color: #ffffff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-top: 0.5rem;

  &:hover {
    background-color: #5a6268;
  }
`;

export default CreateBlogForm;