﻿CREATE TABLE [Auth].[AspNetUserClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] NVARCHAR(36) NOT NULL,
	[ClaimType] NVARCHAR(MAX) NULL,
	[ClaimValue] NVARCHAR(MAX) NULL,
	 CONSTRAINT [PK_AspNetUserClaims] PRIMARY KEY CLUSTERED 
	(
		[Id] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
	CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId] FOREIGN KEY([UserId]) REFERENCES [Auth].[AspNetUsers]([Id])
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
CREATE INDEX [IX_AspNetUserClaims_UserId] ON [Auth].[AspNetUserClaims] ([UserId]);