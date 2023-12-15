import React, { useState } from "react";
import { Button, Image, StyleSheet, TextInput, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import AppText from "../AppText";
import { useNavigation } from "@react-navigation/native";

const validationSchema = Yup.object().shape({
  caption: Yup.string().max(2000, "Caption has reached the maximum character"),
  url: Yup.string().url().required("A url is required"),
});

function NewPostForm(props) {
  const navigation = useNavigation();

  const placeholderImg =
    "https://firebasestorage.googleapis.com/v0/b/instagram-clone-231db.appspot.com/o/thumnail.png?alt=media&token=25c9d876-be71-472f-b718-0c5b1324c434";
  const [thumnail, setThumbnail] = useState(placeholderImg);
  return (
    <Formik
      initialValues={{ caption: "", url: "" }}
      validationSchema={validationSchema}
      validateOnMount={true}
      onSubmit={(values) => {
        console.log(values);
        console.log("Your Post was submitted successfully");
        navigation.navigate("HomeScreen");
      }}
    >
      {({
        errors,
        isValid,
        handleBlur,
        handleChange,
        handleSubmit,
        values,
      }) => (
        <>
          <View style={styles.container}>
            <Image
              style={styles.thumbnail}
              source={{
                uri: thumnail ? thumnail : placeholderImg,
              }}
            />
            <View style={styles.captionContainer}>
              <TextInput
                multiline
                onBlur={handleBlur("caption")}
                onChangeText={handleChange("caption")}
                placeholder="Wrtie a caption"
                placeholderTextColor="grey"
                style={styles.input}
                value={values.caption}
              />
              {errors.caption && (
                <AppText color="red">{errors.caption}</AppText>
              )}
            </View>
          </View>
          <TextInput
            multiline
            onBlur={handleBlur("url")}
            onChange={(e) => setThumbnail(e.nativeEvent.text)}
            onChangeText={handleChange("url")}
            placeholder="Enter image url"
            placeholderTextColor="grey"
            style={styles.input}
            value={values.url}
          />
          {errors.url && <AppText color="red">{errors.url}</AppText>}
          <Button disabled={!isValid} title="Share" onPress={handleSubmit} />
        </>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  captionContainer: {
    flex: 1,
    marginLeft: 12,
  },
  container: {
    flexDirection: "row",
    margin: 20,
  },
  input: { color: "#fff" },
  thumbnail: {
    height: 100,
    width: 100,
  },
});

export default NewPostForm;
