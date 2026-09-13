# Veyra — AI-Adaptive Travel Planning Workspace

## Product Vision

Veyra is an AI-adaptive travel planning workspace that allows users to create, organize, and continuously modify travel itineraries.

Unlike a traditional AI itinerary generator, Veyra treats the itinerary as a living plan. When users change constraints such as time, budget, preferences, or activities, Veyra intelligently adapts the affected parts of the itinerary instead of regenerating the entire trip.

## Core User Flow

Create Trip → Generate Itinerary → Explore → Edit → Change Constraints → AI Adapts → Review Changes → Apply

## MVP Features

### 1. Trip Creation

Users can create a trip with:

* Destination
* Start date
* End date
* Number of travelers
* Travel interests
* Budget
* Planning preferences

### 2. AI Itinerary Generation

Veyra generates a structured itinerary containing:

* Activities
* Locations
* Dates
* Start times
* Duration
* Estimated cost
* Activity category
* Priority

AI responses must be returned as structured data and validated before entering application state.

### 3. Interactive Itinerary

Users can:

* View trips day by day
* View activities on a timeline
* Add activities
* Edit activities
* Delete activities
* Reorder activities
* Move activities between days
* Change activity times

### 4. AI Adaptive Planning

Users can modify constraints such as:

* Budget
* Available time
* Walking tolerance
* Interests
* Activity preferences
* Schedule constraints

Veyra identifies the affected itinerary items and proposes targeted changes.

Example:

> "I don't want to walk more than 5 km today."

Veyra should identify activities that may violate the constraint and suggest alternatives or schedule changes.

### 5. AI Change Review

AI-generated changes should not automatically overwrite the itinerary.

Users should be able to:

* Review proposed changes
* Accept changes
* Reject changes

### 6. Map View

Display itinerary locations geographically and connect activities with route information.

### 7. Budget View

Show:

* Estimated total trip cost
* Daily spending
* Activity costs
* Remaining budget

### 8. Persistence

Users should be able to:

* Save trips
* Reopen existing trips
* Update itineraries
* Delete trips

## Non-MVP Features

Do NOT build these initially:

* Flight booking
* Hotel booking
* Payments
* Social networking
* User-to-user messaging
* Collaborative editing
* Mobile application
* Recommendation marketplace
* Full authentication system
* Real-time collaboration

These can be considered after the MVP is stable.

## Core Data Model

### Trip

```text
Trip
├── id
├── destination
├── startDate
├── endDate
├── travelers
├── budget
├── interests[]
├── preferences
└── days[]
```

### Day

```text
Day
├── id
├── date
└── activities[]
```

### Activity

```text
Activity
├── id
├── title
├── description
├── location
├── startTime
├── duration
├── category
├── estimatedCost
└── priority
```

## Important Architecture Principle

AI should NOT directly control application state.

The flow should be:

User Action
→ Application Event
→ State Update / Constraint Evaluation
→ AI or Optimization Request
→ Structured Response
→ Validation
→ User Review
→ State Update

This allows Veyra to combine deterministic application logic with AI-assisted decision making.

## Example Events

```text
TRIP_CREATED
ACTIVITY_ADDED
ACTIVITY_MOVED
ACTIVITY_UPDATED
ACTIVITY_REMOVED
BUDGET_CHANGED
PREFERENCE_CHANGED
CONSTRAINT_CHANGED
WEATHER_CHANGED
LOCATION_CHANGED
```

## Engineering Goals

Veyra should demonstrate strong frontend engineering through:

* React + TypeScript
* Component-driven architecture
* Predictable state management
* Optimistic UI updates
* Drag-and-drop interactions
* Responsive layouts
* Accessible components
* Performance optimization
* API integration
* Structured AI outputs
* Streaming AI responses
* Error handling
* Automated testing
* Production observability
