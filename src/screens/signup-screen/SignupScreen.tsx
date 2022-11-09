import { Alert, Image, KeyboardAvoidingView, Modal, PermissionsAndroid, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import React, { Component } from 'react';
import { height, width } from '../../styles/Dimension'

import Colors from '../../assets/colors/Colors';
import CustomButton from '../../components/CustomButton';
import Geolocation from '@react-native-community/geolocation';
import Icons from '../../constants/Icons';
import ImagePath from '../../constants/ImagePath';
import ImagePicker from 'react-native-image-crop-picker';
import Input from '../../components/CustomInput';
import { RadioButton } from 'react-native-paper';
import axios from 'axios';
import styles from './styles';

interface SignupProps {

}
interface SignupState {
    name: string;
    email: string;
    mobileNo: string;
    password: string;
    cnfPassword: string;
    refName: string;
    refMobileNo: string;
    relation: string;
    checked: string;
    isPasswordVisible: boolean;
    isCnfPasswordVisible: boolean;
    countryId: any;
    stateId: any;
    cityId: any;
    error: boolean,
    currentLongitude: string;
    currentLatitude: string,
    location: object,
    profileImage: any,
    profilePicModal: boolean,
}

export class SignupScreen extends Component<SignupProps, SignupState> {
    constructor(props: SignupProps) {
        super(props);
        this.state = {
            name: '',
            email: '',
            mobileNo: '',
            password: '',
            cnfPassword: '',
            refMobileNo: '',
            refName: '',
            relation: '',
            checked: '1',
            isPasswordVisible: false,
            isCnfPasswordVisible: false,
            countryId: '',
            stateId: '',
            cityId: '',
            error: false,
            currentLatitude: '',
            currentLongitude: '',
            location: {},
            profileImage: '',
            profilePicModal: false,
        }
    }

    componentDidMount(): void {
        this.onCountryList();
        this.requestLocationPermission();
    }

    requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Location Access Required',
                    message: 'This App needs to Access your location',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                //To Check, If Permission is granted
                Geolocation.getCurrentPosition(data =>
                    // console.log('data---',data)
                    this.setState({ location: data.coords })
                )
            } else {
                Alert.alert('Permission Denied');
            }
        } catch (err) {
            console.log(err);
        }
    };


    handleLoginFormValidation = () => {
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        let namePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        let mobilePattern = /^[0]?[789]\d{9}$/
        if (!this.state.name.match(namePattern)) {
            this.setState({ error: true });
            return false;
        }
        if (!this.state.email.match(emailPattern)) {
            this.setState({ error: true });
            return false;
        }
        if (!this.state.mobileNo.match(mobilePattern)) {
            this.setState({ error: true });
            return false;
        }
        if (this.state.password.length < 2) {
            this.setState({ error: true });
            return false;
        }
        if (this.state.password !== this.state.cnfPassword) {
            this.setState({ error: true });
            return false;
        }
        if (!this.state.refName.match(namePattern)) {
            this.setState({ error: true });
            return false;
        }
        if (!this.state.refMobileNo.match(mobilePattern)) {
            this.setState({ error: true });
            return false;
        }
        if (!this.state.relation.match(namePattern)) {
            this.setState({ error: true });
            return false;
        }
        return true;
    };

    isDetailsValid = () => {
        const isValid = this.handleLoginFormValidation();
        if (isValid) {
            console.log('Form is valid');

        }
        else {
            Alert.alert('Please fill all the details')
        }
    }

    onCountryList = async () => {
        console.log('Country List---');
        try {
            const getList = await axios.get('http://182.76.237.238/~wellness/wellness/api/country_list')
            console.log('res', getList.data.data[0].id);
            if (getList && getList.data && getList.data.data[0].id) {
                this.setState({ countryId: getList.data.data[0].id })
                this.onStateList()
            }
        }
        catch (error: any) {
            console.log(error);

        }
    }
    onStateList = async () => {
        console.log('State List---', this.state.countryId);
        const data = new FormData();
        data.append("country_id", this.state.countryId);
        console.log('State List data---', data);
        try {
            var body = {
                country_id: `${this.state.countryId}`,
            }
            const getList3 = await axios.post("http://182.76.237.238/~wellness/wellness/api/state_list", body)
            console.log('onStateList---', getList3.data.data[0].id);
            if (getList3 && getList3.data && getList3.data.data[0].id) {
                this.setState({ stateId: getList3.data.data[0].id })
                this.onGettingCities(getList3.data.data[0].id)
            }
        }
        catch (error: any) {
            console.log('catch--', error);

        }
    }

    onGettingCities = async (stateId: any) => {
        console.log('onGettingCities List---', stateId);
        try {
            var body = {
                state_id: `${stateId}`,
            }
            const getList3 = await axios.post("http://182.76.237.238/~wellness/wellness/api/city_list", body)
            console.log('onGettingCities---', getList3.data.data[0].id);
            if (getList3 && getList3.data && getList3.data.data[0].id) {
                this.setState({ cityId: getList3.data.data[0].id })
            }
        } catch (error) {

        }
    }

    onSignup = async () => {
        console.log('onSignup---');
        const isValid = this.handleLoginFormValidation();
        if (isValid) {
            try {
                var body = {
                    name: this.state.name,
                    mobile_no: this.state.mobileNo,
                    email: this.state.email,
                    company_name: 'maxtra',
                    password: this.state.password,
                    confirm_password: this.state.cnfPassword,
                    gender: this.state.checked,
                    reference_name: this.state.refName,
                    reference_mobile_no: this.state.refMobileNo,
                    reference_relation: this.state.relation,
                    alternate_mobile_no: 872542634,
                    service_category: 2,
                    experience: 5,
                    country: this.state.countryId,
                    state: this.state.stateId,
                    city: this.state.cityId,
                    pin_code: 847401,
                    lat: this.state.location.latitude,
                    long: this.state.location.longitude,
                    term_condition: 1,
                    device_token: 'sdjfdsfds',
                }
                const getList3 = await axios.post(" http://182.76.237.238/~wellness/wellness/api/provider_registration", body)
                console.log('onSignup---', getList3.data);
                if (getList3 && getList3.data) {
                    Alert.alert('you have signup successfully')
                }
            } catch (error) {

            }
        }
        else {
            Alert.alert('Please fill all the details Correctly')
        }
    }


    passwordVisibility = () => {
        if (!this.state.isPasswordVisible) {
            this.setState({ isPasswordVisible: true })
        }
        else {
            this.setState({ isPasswordVisible: false })
        }
    }

    cnfPasswordVisibility = () => {
        if (!this.state.isCnfPasswordVisible) {
            this.setState({ isCnfPasswordVisible: true })
        }
        else {
            this.setState({ isCnfPasswordVisible: false })
        }
    }

    onModalOpen = () => {
        this.setState({ profilePicModal: !this.state.profilePicModal })
    }

    takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
            this.setState({ profileImage: image.path });
            if (this.state.profileImage) {
                this.setState({ profilePicModal: false });
            }
            // this.bs.current.snapTo(1);
        });
    }

    choosePhotoFromGalery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            this.setState({ profileImage: image.path });
            if (this.state.profileImage) {
                this.setState({ profilePicModal: false });
            }
            // this.bs.current.snapTo(1);
        });
    }

    ProfilePictureModal = () => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.profilePicModal}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    this.setState({ profilePicModal: !this.state.profilePicModal });
                }}
            >
                <View style={styles.modalView}>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonClose]}
                        onPress={this.choosePhotoFromGalery}
                    >
                        <Text style={styles.textStyle}>Choose from Gallery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonClose]}
                        onPress={this.takePhotoFromCamera}
                    >
                        <Text style={styles.textStyle}>Use Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => this.setState({ profilePicModal: !this.state.profilePicModal })}
                    >
                        <Text style={styles.textStyle}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    };

    render() {
        console.log('loaction', this.state.location.latitude);
        console.log('loaction', this.state.location.longitude);
        console.log('loaction', this.state.location);
        console.log('checked', this.state.checked);
        console.log('countryId', this.state.countryId);
        console.log('stateId', this.state.stateId);
        console.log('cityId', this.state.cityId);

        return (
            <View style={styles.container}>
                <KeyboardAvoidingView behavior='padding'>
                    <StatusBar barStyle='dark-content' backgroundColor={Colors.bgColorSecondary} />
                    <View style={{ width: width * 0.95, height: height * 0.1, alignItems: 'center', }}>
                        {/* <Icons.AntDgn name='left' size={30} color={Colors.black} style={{ left: 20, position: 'absolute' }} /> */}
                        <Text style={{ top: 25, color: Colors.black, fontSize: 18, fontWeight: 'bold' }}>Registration</Text>
                        <Text style={{ top: 25, color: Colors.black, fontSize: 18, fontWeight: '500' }}>Please enter your details to signup</Text>
                    </View>

                    <View style={{ top: 10, height: height * 0.77, width: width, alignItems: 'center', alignSelf: 'center', }}>
                        <ScrollView style={{ maxHeight: height * 0.77, flexGrow: 0, }} showsVerticalScrollIndicator={false}>
                            <View style={styles.profileContainer}>
                                <TouchableOpacity
                                    onPress={this.onModalOpen}
                                    activeOpacity={0.8}
                                    style={styles.picContainer}>
                                    <View style={styles.profilePic}>
                                        {this.state.profileImage ?
                                            <Image source={{ uri: this.state.profileImage }} style={{ width: width * 0.25, height: height * 0.123, borderRadius: 40, }} />
                                            :
                                            <Image source={ImagePath.profile} style={{ width: width * 0.25, height: height * 0.123, }} />
                                        }
                                    </View>
                                    <View style={styles.editIconContainer}>
                                        <Icons.FontAwesome name='camera' size={17} color={Colors.primaryWhiteColor} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <this.ProfilePictureModal />
                            <Text style={[styles.inputHeader, {}]}>Name</Text>
                            <Input
                                placeHolderTitle='Name'
                                placeholderColor={Colors.primaryGrayColor}
                                value={this.state.name}
                                onChangeText={(text: string) => this.setState({ name: text })}
                            />
                            <Text style={[styles.inputHeader, {}]}>Email</Text>
                            <Input
                                placeHolderTitle='Email'
                                placeholderColor={Colors.primaryGrayColor}
                                value={this.state.email}
                                keyboardType='email-address'
                                onChangeText={(text: string) => this.setState({ email: text })}
                            />
                            <Text style={[styles.inputHeader, {}]}>Mobile No.</Text>
                            <Input
                                placeHolderTitle='Mobile No'
                                placeholderColor={Colors.primaryGrayColor}
                                value={this.state.mobileNo}
                                keyboardType='phone-pad'
                                maxLength={10}
                                onChangeText={(text: string) => this.setState({ mobileNo: text })}
                            />
                            <Text style={[styles.inputHeader, {}]}>Gender</Text>
                            <View style={styles.radioButtonContainer}>
                                <View style={{ width: '45%', height: height * 0.065, flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.darkgrey, borderRadius: 28 }}>
                                    <RadioButton
                                        uncheckedColor={Colors.white}
                                        value="1"
                                        color='#770808'
                                        status={this.state.checked === '1' ? 'checked' : 'unchecked'}
                                        onPress={() => this.setState({ checked: '1' })}
                                    />
                                    <Text style={{ fontWeight: 'bold', fontSize: 15, color: Colors.white, left: 5 }}>Male</Text>
                                </View>
                                <View style={{ width: '45%', height: height * 0.065, flexDirection: 'row', alignItems: 'center', backgroundColor: Colors.darkgrey, borderRadius: 28 }}>
                                    <RadioButton
                                        value="2"
                                        color='#770808'
                                        status={this.state.checked === '2' ? 'checked' : 'unchecked'}
                                        onPress={() => this.setState({ checked: '2' })}
                                    />
                                    <Text style={{ fontWeight: 'bold', fontSize: 15, color: Colors.white, left: 5 }}>Female</Text>
                                </View>
                            </View>
                            <Text style={[styles.inputHeader, {}]}>Password</Text>
                            <Input
                                placeHolderTitle='Password'
                                secureTextEntry={!this.state.isPasswordVisible}
                                placeholderColor={Colors.primaryGrayColor}
                                value={this.state.password}
                                onPress={this.passwordVisibility}
                                onChangeText={(password: string) => this.setState({ password: password })}
                                Icon={
                                    <Icons.Ionicons name={!this.state.isPasswordVisible ? 'eye-off' : 'eye'} size={22} color='gray' />
                                }
                            />
                            <Text style={[styles.inputHeader, {}]}>Confirm Password</Text>
                            <Input
                                placeHolderTitle='Confirm Password'
                                secureTextEntry={!this.state.isCnfPasswordVisible}
                                placeholderColor={Colors.primaryGrayColor}
                                value={this.state.cnfPassword}
                                onPress={this.cnfPasswordVisibility}
                                onChangeText={(password: string) => this.setState({ cnfPassword: password })}
                                Icon={
                                    <Icons.Ionicons name={!this.state.isCnfPasswordVisible ? 'eye-off' : 'eye'} size={22} color='gray' />
                                }
                            />
                            <Text style={[styles.inputHeader, {}]}>Provide a Refrence for Verification Purpose</Text>
                            <Input
                                placeHolderTitle='Refrence'
                                placeholderColor={Colors.primaryGrayColor}
                                value={this.state.refName}
                                keyboardType='email-address'
                                onChangeText={(text: string) => this.setState({ refName: text })}
                            />
                            <Text style={[styles.inputHeader, {}]}>Mobile No.</Text>
                            <Input
                                placeHolderTitle='Mobile No'
                                placeholderColor={Colors.primaryGrayColor}
                                value={this.state.refMobileNo}
                                keyboardType='phone-pad'
                                maxLength={10}
                                onChangeText={(text: string) => this.setState({ refMobileNo: text })}
                            />
                            <Text style={[styles.inputHeader, {}]}>Relation with Refrence</Text>
                            <Input
                                placeHolderTitle='Relation'
                                placeholderColor={Colors.primaryGrayColor}
                                value={this.state.relation}
                                keyboardType='email-address'
                                onChangeText={(text: string) => this.setState({ relation: text })}
                            />

                        </ScrollView>
                    </View>
                    <View style={{ width: width, height: height * 0.11, position: 'relative', bottom: 0 }}>
                        <CustomButton
                            // onPress={() => this.props.navigation.navigate('SignupScreen')}
                            onPress={this.onSignup}
                            styles={{ height: 52, width: width * 0.95 }}
                            title='Next'
                        />
                        <View style={{ bottom: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={{ color: Colors.black, fontSize: 15, fontWeight: 'bold' }}>Already have an account?</Text>
                            <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold', left: 5 }}>Log In</Text>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View >
        )
    }
}



export default SignupScreen;