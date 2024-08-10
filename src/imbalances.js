// src/imbalances.js

const imbalances = [
    {
        name: "Material Imbalance",
        type: "static",
        indicators: [
            "Count the pieces and pawns for both sides.",
            "Check for exchanges that have left one player with more or fewer pieces or pawns."
        ],
        planAgainst: [
            "Simplify the position: Exchange pieces to convert the material advantage into a winning endgame.",
            "Avoid unnecessary risks: Play solid moves and avoid speculative sacrifices.",
            "Centralize pieces: Use the extra material to dominate key squares and restrict the opponent's activity.",
            "Create threats: Force the opponent to use their limited resources for defense."
        ],
        planWith: [
            "Create complications: Seek tactical opportunities and complicate the position to create chances for counterplay.",
            "Avoid exchanges: Keep as many pieces on the board to increase the complexity.",
            "Target weaknesses: Look for weaknesses in the opponent's position to exploit.",
            "Active pieces: Ensure your pieces are as active as possible to compensate for the material deficit."
        ]
    },
    {
        name: "Pawn Structure",
        type: "static",
        indicators: [
            "Isolated Pawns: Pawns with no adjacent pawns of the same color.",
            "Doubled Pawns: Two pawns of the same color on the same file.",
            "Backward Pawns: Pawns that cannot advance without being captured and are not protected by other pawns.",
            "Pawn Islands: Groups of pawns separated by one or more files.",
            "Hanging Pawns: Two adjacent pawns without support from other pawns."
        ],
        planAgainst: [
            "Fix pawn weaknesses: Fix the opponent's weak pawns (isolated, doubled, backward) and attack them.",
            "Control open files: Place rooks on open files to increase pressure.",
            "Create outposts: Use pawn structure to create strong squares for your pieces.",
            "Initiate pawn breaks: Use pawn breaks to open up the position and exploit the opponent's weak pawns."
        ],
        planWith: [
            "Counter-attack: Look for counter-attacking opportunities to exploit the opponent's pawn weaknesses.",
            "Piece play: Use piece activity to compensate for the pawn structure disadvantages.",
            "Pawn breaks: Plan pawn breaks to alleviate structural weaknesses.",
            "King safety: Ensure your king is safe, especially if your pawn structure is compromised."
        ]
    },
    {
        name: "Piece Activity",
        indicators: [
            "Pieces that are well-placed, controlling important squares or attacking key targets.",
            "Pieces that are restricted, trapped, or unable to participate in the game effectively."
        ],
        planAgainst: [
            "Dominate open files: Use open files to place rooks and create threats.",
            "Outposts: Use outposts for knights and bishops to control key squares.",
            "Piece coordination: Ensure your pieces work together to maximize their activity.",
            "Exploit weak squares: Target weak squares in the opponent's camp with your active pieces."
        ],
        planWith: [
            "Improve piece activity: Find ways to activate your pieces, even if it means temporary sacrifices.",
            "Exchange pieces: Consider exchanging less active pieces to reduce the disparity.",
            "Positional play: Focus on solid positional moves to gradually improve your piece activity.",
            "Avoid weaknesses: Play carefully to avoid creating additional weaknesses in your position."
        ]
    },
    {
        name: "Space",
        type: "static",
        indicators: [
            "Pawn chains that control more squares on the opponent's side of the board.",
            "Pieces that have ample room to maneuver versus pieces that are cramped."
        ],
        planAgainst: [
            "Expand further: Use your space advantage to further restrict the opponent's pieces.",
            "Provoke weaknesses: Push pawns to provoke weaknesses in the opponent's position.",
            "Maneuver pieces: Maneuver your pieces behind your pawn structure to prepare for breakthroughs.",
            "Open lines: Open lines and diagonals to use your space advantage effectively."
        ],
        planWith: [
            "Counter-attack: Seek counter-attacking opportunities to challenge the opponent's space advantage.",
            "Piece exchanges: Exchange pieces to alleviate cramped positions.",
            "Pawn breaks: Plan and execute pawn breaks to challenge the opponent's space.",
            "Active defense: Actively defend and look for chances to improve your position."
        ]
    },
    {
        name: "King Safety",
        indicators: [
            "King exposed to attacks or without adequate pawn cover.",
            "King castled versus king in the center or exposed due to pawn moves around it."
        ],
        planAgainst: [
            "Initiate an attack: Launch an attack against the opponent's exposed king.",
            "Open lines: Open lines and diagonals to increase the effectiveness of your attack.",
            "Use all pieces: Coordinate all your pieces in the attack to overwhelm the opponent's defenses.",
            "Create threats: Constantly create threats to keep the opponent's king under pressure."
        ],
        planWith: [
            "Defend actively: Use active defense to counter the opponent's attacking chances.",
            "Exchange pieces: Exchange attacking pieces to reduce the opponent's attacking potential.",
            "Seek counterplay: Look for counterplay opportunities to distract the opponent from your king.",
            "Improve king safety: Move the king to a safer position if possible, even if it means losing castling rights."
        ]
    },
    {
        name: "Control of Key Squares",
        indicators: [
            "Control of central squares (e4, d4, e5, d5).",
            "Control of squares on open files, particularly if rooks or queens can dominate those files.",
            "Strong outposts for knights or bishops."
        ],
        planAgainst: [
            "Dominate key squares: Place your pieces on key squares to control critical areas of the board.",
            "Use outposts: Create outposts on key squares for your knights and bishops.",
            "Restrict opponent's pieces: Use your control to restrict the mobility of the opponent's pieces.",
            "Prepare breakthroughs: Use control of key squares to prepare tactical or strategic breakthroughs."
        ],
        planWith: [
            "Challenge control: Challenge the opponent's control of key squares with pawn breaks or piece maneuvers.",
            "Find counterplay: Look for opportunities to create counterplay on other parts of the board.",
            "Exchange controlling pieces: Exchange pieces that control key squares to reduce the opponent's advantage.",
            "Reposition pieces: Reposition your pieces to contest control of key squares."
        ]
    },
    {
        name: "Initiative",
        indicators: [
            "Making moves that force the opponent to react defensively.",
            "Having a series of forcing moves that keep the pressure on the opponent."
        ],
        planAgainst: [
            "Maintain pressure: Keep the initiative by constantly creating threats and forcing the opponent to respond.",
            "Control tempo: Control the tempo of the game to keep the opponent on the defensive.",
            "Tactical opportunities: Look for tactical opportunities to convert the initiative into a material or positional advantage.",
            "Coordinate pieces: Use all your pieces in a coordinated manner to maximize the impact of your initiative."
        ],
        planWith: [
            "Neutralize threats: Focus on neutralizing the opponent's threats to regain the initiative.",
            "Seek simplifications: Look for simplifications to reduce the opponent's attacking potential.",
            "Counter-attack: Find opportunities to counter-attack and take over the initiative.",
            "Solid play: Play solid, defensive moves to gradually take control of the game."
        ]
    },
    {
        name: "Development",
        indicators: [
            "Pieces developed to active squares.",
            "Pieces still on their original squares or poorly developed."
        ],
        planAgainst: [
            "Exploit lead in development: Use your lead in development to launch an attack or create threats.",
            "Open the position: Open the position to maximize the impact of your developed pieces.",
            "Initiate tactical play: Use tactics to exploit the opponent's underdeveloped position.",
            "Dominate key squares: Use your developed pieces to control key squares and restrict the opponent's development."
        ],
        planWith: [
            "Catch up in development: Focus on completing your development as quickly as possible.",
            "Defend carefully: Play carefully to avoid falling victim to tactical shots due to your development lag.",
            "Exchange pieces: Consider exchanging pieces to alleviate the pressure from the opponent's developed pieces.",
            "Solid structure: Maintain a solid pawn structure to provide a safe haven for your king and pieces during development."
        ]
    },
    {
        name: "Bishop Pair",
        type: "static",
        indicators: [
            "Open positions favoring bishops with long-range control.",
            "Opponent has given up one or both bishops."
        ],
        planAgainst: [
            "Open the position: Open the position to maximize the power of your bishop pair.",
            "Control long diagonals: Place your bishops on long diagonals to dominate the board.",
            "Target weaknesses: Use the bishops to target weaknesses in the opponent's position.",
            "Coordinate with other pieces: Coordinate your bishops with other pieces to create multiple threats."
        ],
        planWith: [
            "Close the position: Close the position to limit the effectiveness of the opponent's bishop pair.",
            "Active knights: Use your knights actively to challenge the bishop pair's dominance.",
            "Exchange one bishop: Try to exchange one of the opponent's bishops to reduce their advantage.",
            "Create outposts: Use outposts for your knights to counter the bishop pair's control of open lines."
        ]
    }
];

export default imbalances;
