import React from "react";
import { RiMiniProgramFill } from "react-icons/ri";
import { GiArtificialHive } from "react-icons/gi";
import { GiMartyrMemorial } from "react-icons/gi";
import { BsSmartwatch } from "react-icons/bs";
import { SiVivaldi } from "react-icons/si";
import { GiMilkCarton } from "react-icons/gi";
import { GiCableStayedBridge } from "react-icons/gi";
import { FaGrunt } from "react-icons/fa";



export const links = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "About",
		path: "/about",
	},
	{
		name: "Gallery",
		path: "/gallery",
	},
	{
		name: "Plans",
		path: "/plans",
	},
	{
		name: "Trainers",
		path: "/trainers",
	},
	{
		name: "Contact",
		path: "/contact",
	},
];

export const programs = [
	{
		id: 1,
		icon: <RiMiniProgramFill />,
		title: "Lower Body Strength Resistance Work",
		info: "Hamstring Curl Machine. Three sets of 8-12 reps ",
		path: "/programs/111",
	},
	{
		id: 2,
		icon: <GiMartyrMemorial/>,
		title: "Cardio and Core Energetic work",
		info: "Run,hike,cycle, Three sets of 8-10 reps",
		path: "/programs/222",
	},
	{
		id: 3,
		icon: <GiArtificialHive/>,
		title: "Active Recovery and Flexibility",
		info: "Flat Dumbbell Chest Press. Three sets of 10-15 reps.",
		path: "/programs/333",
	},
	{
		id: 4,
		icon: < BsSmartwatch/>,
		title: "Endurance Meditation ",
		info: "Shoulder Press Machine. Three sets of 6-10 reps.",
		path: "/programs/444",
	},
];

export const values = [
	{
		id: 1,
		icon: <SiVivaldi/>,
		title: "Value One",
		desc: "Achieving ultimate human performance.",
	},
	{
		id: 2,
		icon: <GiMilkCarton />,
		title: "Value Two",
		desc: "Being compassionate to clients needs/wants.",
	},
	{
		id: 3,
		icon: <FaGrunt/>,
		title: "Value Three",
		desc: "Honesty and professionalism",
	},
	{
		id: 4,
		icon: < GiCableStayedBridge/>,
		title: "Value Four",
		desc: "Accountability and transparency.",
	},
];

export const faqs = [
	{
		id: 1,
		question: "How often should I exercise?",
		answer:
		    "As a general goal, aim for at least 30 minutes of moderate physical activity every day. If you want to lose weight, keep off lost weight or meet specific fitness goals, you may need to exercise more. Cutting down on  junk foods and sitting time is important, too.",
	},
	{
		id: 2,
		question: "What time of day is best to work out?",
		answer :
			"Research on exercise timing and performance is mixed. However, ongoing studies suggest that afternoon or evening exercise may improve athletic performance. One study examined how time of day affects high-intensity exercise performance. The results indicate that performance peaks between 4PM and 8PM."
    },
	{
		id: 3,
		question: "How long should my workouts be?",
		answer:
	     "If you're doing just two strength training workouts per week, they should last between 45 and 90 minutes. The exact duration depends on individual factors, like experience, fitness, and goals. For more frequent sessions, four to six per week, each workout can be much shorter, even just 30 minutes."
	},
	{
		id: 4,
		question: "Do I need to warm up before my workouts?",
		answer:
		  "A warm up is the very first thing you should do when you begin a workout session. If you don't warm up, even your initial stretching exercises can cause injury. Indeed, forms of exercise such as Pilates are heavily focused on stretching and balance, but you should still spend time warming up before you commence."
},
	{
		id: 5,
		question: "Should I do strength training, cardio or both?",
		answer:
		  "If your main goal is weight loss, you want to burn calories and build muscle mass. So, for optimal benefits, you should incorporate both cardio and strength training into your exercise routine."
		},
	{
		id: 6,
		question: "Should I lift weights for strength training?",
		answer:
		  "Weight training is an excellent way to build muscle mass and make your muscles stronger. It can also keep your metabolism chugging, strengthen your bones and joints, improve your muscle tone, help you burn more calories, and keep you healthier as you age."
	},
];


export const testimonials = [
	{
		id: 1,
		name: "Kris Gleason",
		quote:
			"I genuinely look forward to and enjoy my workouts, and I am grateful I have found a gym and community that values wellness, self-care, and health for life!",
		job:  "Student",
		avatar: require("./images/avatar1.jpg"),
	}, 
	{
		id: 2,
		name: "Daniel Osaretin",
		quote:
			 "This is the friendliest gym  class I have ever been to! The coaches all know my capabilities (and when to push me) and the atmosphere is supportive and fun.",
     	job: "Software Engineer",
		avatar: require("./images/avatar2.jpg"),
	},
	{
		id: 3,
		name: "Vanessa Ballard",
		quote:
			"It’s such a welcoming space. There is no toxic fitness culture vibe at all. All of the trainers and the other members have been so welcoming and supportive. ",
			job: "Lecturer",
		avatar: require("./images/avatar3.jpg"),
	},
	{
		id: 4,
		name: "Grace Sowers",
		quote:
			"This is the one and only gym I have stuck with in my life. The staff is fantastic and very professional. The workouts are very effective and efficient.",
			job: "Doctor",
		avatar: require("./images/avatar4.jpg"),
	},
	{
		id: 5,
		name: "Cate Bergeron",
		quote:
			"It is motivating and challenging. I appreciate that exercises can be tailored specifically for each persons abilities. Routines change frequently which keeps classes fresh.",
			job: "Pharmacist",
		avatar: require("./images/avatar5.jpg"),
	},
];

export const plans = [
	{
		id: 1,
		name: "Silver Package",
		desc: "This package is perfect for beginners who need constant help",
		price: 29.99,
		features: [
			{ feature: "Cardio", available: true },
			{ feature: "Balance training", available: true },
			{ feature: "Flexibility and stretching", available: true },
			{ feature: "Upper body workout", available: true },
			{ feature: "Lower body workout", available: true },
			{ feature: "Pilates", available: false },
			{ feature: "Endurance Meditation", available: false },
			{ feature: "On-demand classes", available: false },
			{ feature: "Bodyweight", available: false },
			{ feature: "Aerobic fitness", available: false },
			{ feature: "Bicep Workouts", available: false },
			{ feature: "Glute Workouts", available: false },
			{ feature: "Tricep Workouts", available: false },
		],
	},
	{
		id: 2,
		name: "Gold Package",
		desc: "This is the perfect package for beginners who know what their doing",
		price: 49.99,
		features: [
			{ feature: "aerobic fitness", available: true },
			{ feature: "Pilates", available: true },
			{ feature: "Bodyweight", available: true },
			{ feature: "Fitness Pilates", available: true },
			{ feature: "Endurance Meditation", available: true },
			{ feature: "Tricep Workouts", available: true },
			{ feature: "Bodycombat", available: true },
			{ feature: "Yin Yoga", available: true },
			{ feature: "Zumba", available: true },
			{ feature: "Body Blast", available: false },
			{ feature: "On-demand classes", available: false },
			{ feature: "Aqua Aerobics", available: false },
			{ feature: "legs,bums and Tums", available: false },
		],
	},
	{
		id: 3,
		name: "Platinum Package",
		desc: "This package is perfect for busy people who need home service",
		price: 89.99,
		features: [
			{ feature: "Core Conditioning", available: true },
			{ feature: "legs,bums and Tums", available: true },
			{ feature: "Clinical Pilates", available: true },
			{ feature: "Yoga Nidra", available: true },
			{ feature: "Zumba", available: true },
			{ feature: "Bodycombat", available: true },
			{ feature: "circuits", available: true },
			{ feature: "Express Abs", available: true },
			{ feature: "Glute Camp", available: true },
			{ feature: "on-demand classes", available: true },
			{ feature: "3D sensors machines", available: true },
			{ feature: "Healthy snack bar", available: true },
			{ feature: "Personal trainers, Free WiFi", available: true },
		],
	},
];

const Trainer1 = require("./images/trainer1.jpg");
const Trainer2 = require("./images/trainer2.jpg");
const Trainer3 = require("./images/trainer3.jpg");
const Trainer4 = require("./images/trainer4.jpg");
const Trainer5 = require("./images/trainer5.jpg");
const Trainer6 = require("./images/trainer6.jpg");

export const trainers = [
	{
		id: 1,
		image: Trainer1,
		name: "Tomas Pangonis",
		job: "Aerobic Trainer",
		socials: [
			"https://instagram.com/",
			"https://twitter.com/",
			"https://facebook.com/",
			"https://linkedin.com/",
		],
	},
	{
		id: 2,
		image: Trainer2,
		name: "Kat Pilsman",
		job: "Flexibility Trainer",
		socials: [ 
			"https://instagram.com/",
			"https://twitter.com/",
			"https://facebook.com/",
			"https://linkedin.com/",
		],
	},
	{
		id: 3,
		image: Trainer3,
		name: "Eric Coelho",
		job: "Speed Trainer",
		socials: [
			"https://instagram.com/",
			"https://twitter.com/",
			"https://facebook.com/",
			"https://linkedin.com/",
		],
	},
	{
		id: 4,
		image: Trainer4,
		name: "Garry Tomlinson",
		job: "Body Composition Trainer",
		socials: [
			"https://instagram.com/",
			"https://twitter.com/",
			"https://facebook.com/",
			"https://linkedin.com/",
		],
	},
	{
		id: 5,
		image: Trainer5,	 
		name: "Diana Eggerichs",
		job: "Circuit Trainer",
		socials: [
			"https://instagram.com/",
			"https://twitter.com/",
			"https://facebook.com/",
			"https://linkedin.com/",
		],
	},
 
	{
		id: 6,
		image: Trainer6,
		name: " Alan Hale-Mitchell",
	    job: "Physical Intelligence Trainer",
		socials: [
			"https://instagram.com/",
			"https://twitter.com/",
			"https://facebook.com/",
			"https://linkedin.com/",
		],
	},
];
