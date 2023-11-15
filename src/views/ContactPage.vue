<template>
  <!-- FORM IS VALID POPUP MESSAGE -->
  <div v-if="formSubmitted" class="modal-overlay" @click="closeModal">
    <div class="modal-content">
      <p class="title">Thank you for contacting us!</p>
      <router-link to="/">Go to Homepage</router-link>
      <button class="submit-btn" @click="closeModal">Close</button>
    </div>
  </div>

  <div class="contact">
    <div class="contact__info">
      <div class="contact__icons">
        <i class="far fa-envelope fa-2x"></i>
        <i class="fas fa-phone fa-2x"></i>
        <i class="far fa-clock fa-2x"></i>
      </div>
      <h3 class="contact__info-sub title">How can we assist you?</h3>

      <p>Crete/Rethymno</p>
      <p>Rethymno 74100</p>
      <p><span>Email</span>: nikiforos.nik96@gmail.com</p>
      <p><span>TEL</span>: (+30) 6971000000</p>
    </div>

    <div class="contact__form">
      <h3 class="contact__form-sub title">Contact Form</h3>
      <form @submit.prevent="submitForm">
        <!-- firstName -->
        <div class="form-group-name">
          <label for="firstName" class="required">First Name:</label>
          <input
            type="text"
            placeholder="e.g., Nikos"
            id="firstName"
            name="firstName"
            v-model="formData.firstName"
            @input="validateFirstName"
            @blur="validateFirstName"
            required
          />
          <p
            v-if="!formData.firstNameValid && firstNameDirty"
            class="error-message"
          >
            First name is required.
          </p>
        </div>

        <!-- lastName -->
        <div class="form-group-last">
          <label for="lastName" class="required">Last Name:</label>
          <input
            type="text"
            placeholder="e.g., Nikiforos"
            id="lastName"
            name="lastName"
            v-model="formData.lastName"
            @input="validateLastName"
            @blur="validateLastName"
            required
          />
          <p
            v-if="!formData.lastNameValid && lastNameDirty"
            class="error-message"
          >
            Lastname is required.
          </p>
        </div>

        <!-- email -->
        <div class="form-group-email">
          <label for="email" class="required">Email:</label>
          <input
            type="email"
            placeholder="example@email.com"
            id="email"
            name="email"
            v-model="formData.email"
            @input="validateEmail"
            @blur="validateEmail"
            required
          />
          <p v-if="!formData.emailValid && emailDirty" class="error-message">
            Email not valid
          </p>
        </div>

        <!-- phone -->
        <div class="form-group-phone">
          <label for="phone" class="required">Phone Number:</label>
          <input
            type="tel"
            placeholder="+30 6971883855"
            id="phone"
            name="phone"
            v-model="formData.phone"
            @input="validatePhone"
            @blur="validatePhone"
            required
          />
          <p v-if="!formData.phoneValid && phoneDirty" class="error-message">
            Phone not valid
          </p>
        </div>

        <!-- message -->
        <div class="form-group-message">
          <label for="message" class="required">Message:</label>
          <textarea
            id="message"
            placeholder="Message"
            name="message"
            rows="6"
            v-model="formData.message"
            @input="validateMessage"
            @blur="validateMessage"
            required
          ></textarea>
          <p
            v-if="!formData.messageValid && messageDirty"
            class="error-message"
          >
            PLease insert a message
          </p>
        </div>
        <button type="submit" class="submit-btn">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      },
      formDataValid: {
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        message: true,
      },
      formSubmitted: false,
      firstNameDirty: false,
      lastNameDirty: false,
      phoneDirty: false,
      emailDirty: false,
      messageDirty: false,
    };
  },
  methods: {
    validateFirstName() {
      this.formDataValid.firstName = !!this.formData.firstName.trim();
      this.firstNameDirty = true;
    },
    validateLastName() {
      this.formDataValid.lastName = !!this.formData.lastName.trim();
      this.lastNameDirty = true;
    },
    validateEmail() {
      this.formDataValid.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        this.formData.email.trim()
      );
      this.emailDirty = true;
    },
    validatePhone() {
      this.formDataValid.phone = /^\d{5,10}$/.test(this.formData.phone.trim());
      this.phoneDirty = true;
    },
    validateMessage() {
      this.formDataValid.message = !!this.formData.message.trim();
      this.messageDirty = true;
    },
    submitForm() {
      // Reset form validation
      for (const key in this.formDataValid) {
        this.formDataValid[key] = true;
      }

      // Validate the form fields
      if (!this.formData.firstName.trim()) {
        this.formDataValid.firstName = false;
      }

      if (!this.formData.lastName.trim()) {
        this.formDataValid.lastName = false;
      }

      if (!this.formDataValid.email) {
        this.formDataValid.email = false;
      }

      if (
        !this.formData.phone ||
        !/^\d{5,10}$/.test(this.formData.phone.trim())
      ) {
        this.formDataValid.phone = false;
      }

      if (!this.formData.message.trim()) {
        this.formDataValid.message = false;
      }

      // Check if there are validation errors
      const hasErrors = Object.values(this.formDataValid).some(
        (isValid) => !isValid
      );

      // If there are no errors, proceed with form submission
      if (!hasErrors) {
        console.log("Form submitted:", this.formData);
        this.formSubmitted = true;
        // You can perform additional actions here, like sending the form data to a server
      }
    },
    closeModal() {
      // Reset formSubmitted when closing the modal
      this.formSubmitted = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/PageStyles/contactpage.scss";
</style>
