# MOTHERSHIP THERMAL TEMPLATES
A repo containing various thermal printing templates for , initially meant for use with the Mothership role-playing game. Aesthetically they should match any industrial Sci-Fi with a hint of corporate dystopia or cassette futurism, which will cover most popular science fiction role-playing games short of, maybe, Eclipse Phase.

## Templates

### Contract
A player-facing handout representing a contract someone gave to the P.C's. Go over each objective at the end with a sharpie and stamp it before payment for extra flavor.

### Mission
A small G.M recap of a mission for quick reference during play. Not meant for the players, this one's for you.

### Wound
A handout of a wound meant to be **aggressively stapled** on a player's character sheet. Only allow them to remove it when it's healed, the leftover staple leaving a physical scar on their sheet, forever. Using a **bigger** stapler for heavier wounds is optional but recommended. I'm partial to the Rapid K1 myself for those extra-large scars. Not a sponsor.

### O2 Bill
An oxygen bill meant to replace the oxygen bill and shore leave systems in A Pound of Flesh, inspired by Shadowdark's realtime torches. Stamp when paid.

### Crew Ledger
A quick player-facing handout representing known crew members.

## Notes
Most template properties allow html injection. This is used for the --redacted-- effect and for sponsor html injection in the O2 bill. I made sure to leave exemples in the skeletons you can take inspiration from.

## How to use
The stamp boxes are meant to accomodate loyalty-card scale stamps. You can find many cheap auto-refill ones online.

### Mission, Contract and ID
The Contract and Mission are two parts of the same entity. The Contract is the Player-facing handout, the Mission is a quick summary of secret contract info for the G.M. The crew ledger can act as an additional handout. If you want to write your own third party app, note the ID property for easy linking.

### API Use
Most of the templates are meant to be used through another app auto-filling data and sending an API call.

Some of the templates greatly benefit from this, the 02 bill REALLY shines when sent every 20 minutes to the printer. 

API call example:

url : POST http://{{SalesAndDungeonsUrlAndPort}}/api/printTemplate
body : [
  "tmpl:tatourmi+oxygen-bill",
  {
    "id": "O2-01",
    "name": "OxygenTax",
    "data": {
      "price": "100",
      "quote": "Thank you for choosing life",
      "timer": "20M"
    }
  },
  {}
]

## AI Use disclaimer
AI was used to generate the render.js file and the style guide. I've also used an agent to brainstorm CSS and HTML property ideas and initial layout for most of the templates. I've gone over nearly all of the html and css by hand at this point (Basically everything used in actual templates), but I felt like people should know this is hand-finished, not hand-made.

## Roadmap
- [ ] Describe each template's purpose.
- [ ] Provide a shell script for people who don't want to make an entire third-party app for the O2 bill
- [ ] Add a template for entities
- [ ] Add gear templates
- [ ] Add a map template of some kind
- [ ] Re-Test all printouts (Don't judge me I was busy)