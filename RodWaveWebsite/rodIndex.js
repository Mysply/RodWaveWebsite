document.addEventListener('DOMContentLoaded', displayResults);

function displayResults() {
    const data = document.location.search;
    const params = new URLSearchParams(data);

    // Retrieve answers from form with default values
    const name = params.get('fname') || "";
    const amount = params.get('amount') || "";
    const stress = params.get('stress') || "";
    const personality = params.get('personality') || "";
    const advice = params.get('advice') || "";
    const success = params.get('success') || "";
    const weekendVibe = params.get('weekendVibe') || "";
    const emotionExpression = params.get('emotionExpression') || "";
    const listeningVibe = params.get('listeningVibe') || "";
    const musicTheme = params.get('musicTheme') || "";
    const pastReflection = params.get('pastReflection') || "";
    const inspiration = params.get('inspiration') || "";
    const selfCare = params.get('selfCare') || "";
    const motivation = params.get('motivation') || "";
    const adviceToSelf = params.get('adviceToSelf') || "";
    const peaceActivity = params.get('peaceActivity') || "";
    const idealEnvironment = params.get('idealEnvironment') || "";

    // Debugging: Check parameter values
    console.log("Name:", name);
    console.log("Amount of Albums:", amount);
    console.log("Stress Handling:", stress);
    console.log("Personality Type:", personality);
    console.log("Advice to Others:", advice);
    console.log("Success Definition:", success);
    console.log("Weekend Vibe:", weekendVibe);
    console.log("Emotion Expression:", emotionExpression);
    console.log("Listening Vibe:", listeningVibe);
    console.log("Music Theme:", musicTheme);
    console.log("Past Reflection:", pastReflection);
    console.log("Inspiration:", inspiration);
    console.log("Self Care:", selfCare);
    console.log("Motivation:", motivation);
    console.log("Advice to Self:", adviceToSelf);
    console.log("Peace Activity:", peaceActivity);
    console.log("Ideal Environment:", idealEnvironment);

    let album;
    let image;
    let description;

    // 'SoulFly': For those who value emotional connections, introspection, and resilience.
    if (
        (emotionExpression === "heartOnSleeve" || emotionExpression === "shareFeels") &&
        (musicTheme === "overcomingStruggles" || musicTheme === "innerStrength") &&
        (pastReflection === "focusOnGrowth" || pastReflection === "learnMoveForward") &&
        weekendVibe === "relaxingAtHome"
    ) {
        album = "SoulFly";
        image = 'images/RodWaveSoulFly.jpeg';
        description = "SoulFly embodies a journey of self-discovery and resilience. Through raw and introspective lyrics, Rod Wave navigates the complexities of emotional endurance, touching on themes of loneliness, inner strength, and growth. This album resonates with those who find solace in solitude and personal reflection, creating an anthem for those on a journey of healing and self-acceptance.";
    } 

    // 'PTSD': For those dealing with personal struggles, focused on overcoming trauma.
    else if (
        stress === "pushThruAndKeepGoing" &&
        (listeningVibe === "emotionalIntense" || listeningVibe === "rawGritty") &&
        (musicTheme === "overcomingStruggles" || musicTheme === "embracingSolitude") &&
        idealEnvironment === "quietSpaces"
    ) {
        album = "PTSD";
        image = 'images/RodWavePTSD.jpeg';
        description = "In PTSD, Rod Wave opens up about the emotional scars left by past traumas and the journey toward healing. This album resonates deeply with those learning to confront inner pain and embrace vulnerability, serving as a reminder that healing is a process to take one step at a time.";
    }

    // 'Pray 4 Love': For those seeking connection, ambition, and emotional stability.
    else if (
        (success === "helpingOthers" || success === "personalGrowth") &&
        (peaceActivity === "qualityTime" || peaceActivity === "listeningToMusic") &&
        (selfCare === "supportLovedOnes" || selfCare === "reflectOnLife") &&
        weekendVibe === "timeWithFriends"
    ) {
        album = "Pray 4 Love";
        image = 'images/RodWavePray4Love.jpeg';
        description = "Pray 4 Love dives into the complexity of love, vulnerability, and ambition. Rod Wave paints a picture of longing and self-worth, reflecting on both the rewards and sacrifices of connection. For those who see love as motivation and a challenge, each song speaks to a different facet of relationships, reminding listeners to cherish the connections that bring meaning.";
    }

    // 'Hunger Games 3': For ambitious, resilient individuals who seek success.
    else if (
        (success === "bigGoals" || success === "stayingTrue") &&
        inspiration === "overcomingChallenges" &&
        (motivation === "focusOnDreams" || motivation === "reflectOnProgress") &&
        (idealEnvironment === "creativeStudios" || idealEnvironment === "exploringOutdoors")
    ) {
        album = "Hunger Games 3";
        image = 'images/RodWaveHungerGames3.jpeg';
        description = "Hunger Games 3 dives into the relentless pursuit of success, grappling with the cost of ambition and the complexities of identity. Rod Wave reflects on the sacrifices and emotional toll of chasing dreams, resonating with those driven by passions. It’s both motivation and reflection for those staying true while navigating life’s pressures.";
    }

    // 'Beautiful Mind': For introspective, thoughtful individuals who focus on mental strength.
    else if (
        (emotionExpression === "keepPrivate" || emotionExpression === "throughArt") &&
        (musicTheme === "selfDiscovery" || musicTheme === "innerStrength") &&
        (adviceToSelf === "embraceJourney" || adviceToSelf === "findPeaceWithin") &&
        peaceActivity === "meditation"
    ) {
        album = "Beautiful Mind";
        image = 'images/RodWavEbeautifulMind.jpeg';
        description = "In Beautiful Mind, Rod Wave explores mental health, growth, and relationships. It speaks to those prioritizing emotional resilience and balance. Every track invites listeners to embrace vulnerability and cherish their journey, creating a moving soundtrack for anyone valuing mental and emotional strength.";
    }

    // 'Jupiter's Diary': For adventurous, expressive individuals who love new experiences.
    else if (
        (weekendVibe === "exploringNew" || weekendVibe === "attendingEvents") &&
        (listeningVibe === "upliftingMotivating" || listeningVibe === "reflective") &&
        (inspiration === "newExperiences" || adviceToSelf === "expressYourself") &&
        (idealEnvironment === "exploringOutdoors" || idealEnvironment === "culturalEvents")
    ) {
        album = "Jupiter's Diary";
        image = 'images/RodWaveJupitersDiary.jpeg';
        description = "Jupiter's Diary is an exploration of introspection and self-growth, capturing Rod Wave reflection on success, fame, and authenticity. With an honest and reflective tone, he invites listeners to pause, question, and embrace life’s uncertainties.";
    }

    // 'Nostalgia': For those who value cherished memories, connection, and reflection.
    else if (
        (emotionExpression === "shareFeels" || emotionExpression === "heartOnSleeve") &&
        (musicTheme === "embracingSolitude" || musicTheme === "communitySupport") &&
        pastReflection === "practiceForgiveness" &&
        peaceActivity === "qualityTime"
    ) {
        album = "Nostalgia";
        image = 'images/RodWaveNostalgia.png';
        description = "Nostalgia is a reflection on the past, exploring bittersweet memories. Rod Wave captures longing, regret, and growth, connecting with those who value their past experiences. Each track paints a vivid picture of cherished moments and lost connections, reminding us that our memories shape us into who we are.";
    }

    // Default album - 'Last Lap' if no other conditions match
    else {
        album = "Last Lap";
        image = 'images/RodWaveLastLap.jpg';
        description = "Last Lap captures Rod Wave reflections on the end of a journey and the desire for closure. This album speaks to those ready to embrace the next chapter, leaving behind what no longer serves them. Through powerful lyrics, Rod Wave encourages listeners to push forward and take pride in their growth.";
    }

    // Display the results
    const container = document.getElementById('results');
    container.innerHTML = `
        <h1>You are ${album}!</h1>
        <img src="${image}" alt="${album}">
        <p>${description}</p>
    `;
}