const siteMetadata = {
    title: `ASHLEY TURNER`,
    siteUrl: `http://localhost`,
    capitalizeTitleOnHome: false,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/test.jpg`,
    ogImage: `/images/test.jpg`,
    twoColumnWall: true,
    cookiePolicy: true,
    introTag: `WEB DESIGNER | ASPIRING PRODUCT MANAGER`,
    description: `Full-Stack Software Engineer PRODUCING new ideas that comes from merging the CREATIVE and the LOGICAL to effectively problem-solve.`,
    about:
        "Hello there, I'm Ashley Turner, and I love creating innovative solutions that can help make people’s lives easier and more efficient. I first put that passion into practice within the medical field but after a couple of years, I found that I could instill further change within the IT world. I dedicated myself to learning software engineering and enrolled in General Assembly's six-month immersive class. With my new found skills, I am able to grow my career from a web designer to an aspiring product manager and help produce ideas that will improve people’s experiences. When I'm not brushing up on my coding skills, you can find me surfing waves whenever given the chance to do so.",
    author: `Ashley`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/",
        },
        {
            name: "ABOUT",
            url: "/about",
        },
        {
            name: "BLOG",
            url: "/blog",
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio",
        },
        {
            name: "CONTACT",
            url: "/contact",
        },
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy",
        },
        {
            name: "GitHub",
            url: "https://github.com/ashleyy808",
        },
        {
            name: "Linkedin",
            url: "https://www.linkedin.com/in/ashley-turner808/",
        },
    ],
    social: [
        {
            name: "Linkedin",
            icon: "/images/Linkedin.svg",
            url: "https://www.linkedin.com/in/ashley-turner808/",
        },
    ],
    contact: {
        // leave empty ('') or false to hide form
        api_url: "https://getform.io/f/f227a36e-096a-4c6a-9963-9f1918a85bb3",
        description: `You can contact me at:`,
        mail: "ashley.turner.ny@gmail.com",
        phone: "808-557-8680",
        address: "New York, \nNew York",
    },
    disqus: "",
}

const beforeContactFormSubmit = data => {
    // Code 0 - success
    // Code 1 - Name
    // Code 2 - Email
    // Code 3 - Message
    // Code 4 - Other
    const errors = []

    if (data.name.trim().length < 2) {
        errors.push({
            code: 1,
            message: "Enter a name",
        })
    }

    if (!data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
        errors.push({
            code: 2,
            message: "Enter a valid email address",
        })
    }

    if (data.message.trim().length < 15) {
        errors.push({
            code: 3,
            message: "Enter a message with atleast 15 characters",
        })
    }

    if (errors.length > 0)
        return {
            result: false,
            errors: errors,
        }

    return {
        data: {
            name: data.name,
            email: data.email,
            message: data.message,
        },
        result: true,
    }
}

const contactFormSubmit = async (api, data) => {
    let res: any = await fetch(api, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })

    res = await res.json()

    if (res.success) {
        return {
            result: true,
        }
    }
    return {
        result: false,
        ...res,
    }
}

const defaults = {
    disqus: null,
    twoColumnWall: true,
    darkmode: false,
    switchTheme: true,
    capitalizeTitleOnHome: true,
    cookiePolicy: false
}

Object.keys(defaults).forEach(item => {
    if (siteMetadata[item] === undefined) {
        siteMetadata[item] = defaults[item]
    }
})

export { siteMetadata, beforeContactFormSubmit, contactFormSubmit }
