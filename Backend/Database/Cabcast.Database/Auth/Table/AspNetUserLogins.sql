﻿CREATE TABLE [Auth].[AspNetUserLogins](
	[LoginProvider] NVARCHAR(36) NOT NULL,
	[ProviderKey] NVARCHAR(36) NOT NULL,
	[ProviderDisplayName] NVARCHAR(max) NULL,
	[UserId] NVARCHAR(36) NOT NULL,
	 CONSTRAINT [PK_AspNetUserLogins] PRIMARY KEY CLUSTERED 
	(
		[LoginProvider] ASC,
		[ProviderKey] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY],
	CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId] FOREIGN KEY([UserId])REFERENCES [Auth].[AspNetUsers]([Id])
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
CREATE INDEX [IX_AspNetUserLogins_UserId] ON [Auth].[AspNetUserLogins] ([UserId]);