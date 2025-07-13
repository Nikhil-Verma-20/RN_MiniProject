import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import CustomButton from '../../components/customButton';
const { width, height } = Dimensions.get("screen")
import * as yup from 'yup'

const FormikAndYup = () => {

    const loginSchema = yup.object().shape({
        email: yup.string()
            .email("Invalid Email Format")
            .required("Email is required"),
        password: yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    })


    return (
        <View style={styles.mainView}>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={(values) => console.log("values", values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
                    <View>
                        <TextInput
                            placeholder='Email'
                            placeholderTextColor={"grey"}
                            onChangeText={handleChange("email")}
                            onBlur={handleBlur("email")}
                            value={values.email}
                            style={styles.inputView}
                        />
                        {touched.email && errors.email && (
                            <Text style={styles.errorText}>{errors.email}</Text>
                        )}
                        <TextInput
                            placeholder='Password'
                            placeholderTextColor={"grey"}
                            onChangeText={handleChange("password")}
                            onBlur={handleBlur("password")}
                            value={values.password}
                            style={styles.inputView}
                        />
                        {touched.password && errors.password && (
                            <Text style={styles.errorText}>{errors.password}</Text>
                        )}
                        <CustomButton
                            title={"Submit"}
                            backgroundColor={"blue"}
                            marginTop={40}
                            onPress={handleSubmit} />
                    </View>
                )}

            </Formik>
        </View>
    )
};

const styles = StyleSheet.create({
    mainView: {
        width: width,
        height: height,
        backgroundColor: "white"
    },
    inputView: {
        width: "90%",
        borderWidth: 0.5,
        borderRadius: 10,
        fontSize: 16,
        color: "black",
        alignSelf: "center",
        paddingHorizontal: 10,
        marginTop: 20
    },
    errorText: {
        color: 'red',
        textAlign: "center",
    }

})

export default FormikAndYup;

