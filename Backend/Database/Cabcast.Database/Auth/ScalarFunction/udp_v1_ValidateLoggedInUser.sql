﻿CREATE FUNCTION [Auth].[udp_v1_ValidateLoggedInUser]
(
	@LoggedInUserId UNIQUEIDENTIFIER
)
RETURNS BIT
AS
BEGIN

	DECLARE @EmptyGuid UNIQUEIDENTIFIER;
	SET @EmptyGuid = CAST(CAST(0 AS BINARY) AS UNIQUEIDENTIFIER);
	
	RETURN CASE WHEN (@LoggedInUserId IS NULL OR @LoggedInUserId = @EmptyGuid OR NOT EXISTS(SELECT TOP 1 1 FROM [Account].[UserInfo] WHERE [Id] = @LoggedInUserId)) THEN 0 ELSE 1 END;
END
